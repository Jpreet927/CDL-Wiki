package com.jpreet.cdlwiki.utility;

import java.security.SecureRandom;
import java.util.Base64;

public class AuthHelper {
    public static String generateBase64String() {
        // Generate a random byte array
        byte[] randomBytes = new byte[32]; // You can adjust the length as needed
        new SecureRandom().nextBytes(randomBytes);

        // Encode the random byte array to base64
        byte[] encodedBytes = Base64.getEncoder().encode(randomBytes);

        // Convert the byte array to a string
        String base64String = new String(encodedBytes);
        return base64String;
    }
}
