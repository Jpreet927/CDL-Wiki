import Section from "../components/templates/Section";
import Hero from "../components/home/Hero";
import ArticleCard from "../components/ArticleCard";
import { ARTICLE_DATA } from "../ts/constants/ArticlesData";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Section title="Teams">
                <div></div>
            </Section>
            <Section title="Latest News">
                <div className="grid grid-cols-2 gap-4">
                    {ARTICLE_DATA.map((article) => (
                        <ArticleCard article={article} />
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default HomePage;
