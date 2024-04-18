import SectionTitle from "../SectionTitle";

const HeroDesc = async () => {
    return (
        <div className="flex-1 p-4 rounded-xl border-4 border-purple-600 mx-auto max-w-xl mx-4 my-2">
            <SectionTitle title="Full Stack Developer" size={3} includeBorder={false}/>
            <p className="flex justify-center mb-4">I like to train LLMs and do Full Stack Web Development.</p>
            <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                <p className="flex-1 border-2 border-purple-600 p-2 rounded-lg">Experience with Data Engineering Technologies and Machine Learning Techniques.</p>
                <p className="flex-1 border-2 border-purple-600 p-2 rounded-lg">Working on Web Development Skills while proficient with Database management and Api creation.</p>
            </div>
        </div>
    );
};

export default HeroDesc;
