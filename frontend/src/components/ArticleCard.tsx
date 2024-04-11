import img from "@/assets/images/CDL-Trophy.jpg";
import { Article } from "../ts/types/Article";
import { Link } from "react-router-dom";
import moment from "moment";

const ArticleCard = ({ article }: { article: Article }) => {
    return (
        <Link to={article.link} target="_blank" className="flex flex-col gap-2">
            <div className="overflow-hidden aspect-video flex items-center justify-center relative">
                <div className="absolute top-0 left-0 p-6 z-10">
                    <p className="opacity-75 text-sm">{`${moment(
                        article.date
                    ).format("MM/DD/YYYY")}`}</p>
                </div>
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
