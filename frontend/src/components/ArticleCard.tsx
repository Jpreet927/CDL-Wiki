import img from "@/assets/images/CDL-Trophy.jpg";
import { Article } from "../ts/types/Article";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }: { article: Article }) => {
    return (
        <Link to={article.link} target="_blank" className="flex flex-col gap-2">
            <div className="overflow-hidden aspect-video flex items-center justify-center">
                <img
                    src={article.img || img}
                    alt="Test Image"
                    className="object-cover hover:scale-105 transition-transform ease-in-out duration-500"
                />
            </div>
            <div>
                <h3>{article.title}</h3>
                <p className="text-secondary">{article.description}</p>
            </div>
        </Link>
    );
};

export default ArticleCard;
