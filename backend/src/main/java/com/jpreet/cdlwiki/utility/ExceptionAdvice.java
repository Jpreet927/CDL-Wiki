package com.jpreet.cdlwiki.utility;

import com.jpreet.cdlwiki.exception.CDLWikiException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.stream.Collectors;

@RestControllerAdvice
public class ExceptionAdvice {
    private static final Log LOGGER = LogFactory.getLog(ExceptionAdvice.class);

    @Autowired
    private Environment environment;

    @ExceptionHandler(CDLWikiException.class)
    public ResponseEntity<ErrorInfo> cdlExceptionHandler(Exception exception) {
        LOGGER.error(exception.getMessage(), exception);

        ErrorInfo error = new ErrorInfo();
        error.setErrorCode(HttpStatus.BAD_REQUEST.value());
        error.setErrorMessage(exception.getMessage());

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({ MethodArgumentNotValidException.class, ConstraintViolationException.class })
    public ResponseEntity<ErrorInfo> validationExceptionHandler(Exception exception) {
        LOGGER.error(exception.getMessage(), exception);

        String errorMessage;
        if (exception instanceof MethodArgumentNotValidException) {
            MethodArgumentNotValidException methodException = (MethodArgumentNotValidException) exception;
            errorMessage = methodException
                    .getBindingResult()
                    .getAllErrors()
                    .stream()
                    .map(ObjectError::getDefaultMessage)
                    .collect(Collectors.joining(", "));
        } else {
            ConstraintViolationException constraintException = (ConstraintViolationException) exception;
            errorMessage = constraintException.getErrorMessage();
        }

        ErrorInfo error = new ErrorInfo();
        error.setErrorCode(HttpStatus.BAD_REQUEST.value());
        error.setErrorMessage(errorMessage);

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}
