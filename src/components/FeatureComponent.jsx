import { useState } from "react";

export default function FeaturesComponent() {
    let features = [
        { id: 1, featureName: "create todo app" },
        { id: 2, featureName: "heyy" }
    ];

    let [featuresArr, setFeaturesArr] = useState(features);
    let [inputValue, setInputValue] = useState("");
    

    function FeatureList({ features }) {
        return (
            <div className="featureList">
                {
                    features.map((feature) => (
                        <div className="feature" key={feature.id}>
                            <h3>{feature.featureName}</h3>
                            <button onClick={() => deleteFeature(feature.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>)
    }

    function deleteFeature(id) {
        setFeaturesArr(featuresArr.filter(feature => feature.id !== id))
    }

    return (
        <section className="features" id="features">
            <div className="container">
                <h2>my todo app</h2>
                <input className="inputEnterTask" type="text" placeholder="Enter your task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && setFeaturesArr([...featuresArr, { id: featuresArr.length + 1, featureName: inputValue }])} />
                <FeatureList features={featuresArr} />
            </div>
        </section>
    );
}
