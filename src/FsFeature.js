import { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";
import { createInstance } from "@optimizely/optimizely-sdk";

const FsFeature = ({userId}) => {
    const [decision, setDecision] = useState(null);
    const [theUser, setTheUser] = useState(null);

    useEffect(() => {
        const optiClientInst = createInstance({sdkKey: 'Ha2bjZLWbfpSwX1Q5y9J3'});
        optiClientInst.onReady().then(() => {
            const user = optiClientInst.createUserContext(userId, {isBrooksVip: true});
            setTheUser(user);
            setDecision(user.decide('expanding_btn_brooks'))
        })
    }, [userId]);

    const handleButonClick = () => {
        theUser.trackEvent('scaleButtonClicked');
    }

    return ( 
        <div className="feature">
            <h2>Full Stack Example Feature</h2>
            <div>User ID is: {userId}</div>
            {decision && <div>Feature enabled: {decision.enabled.toString()} and scale is: {decision.variables.button_scale}</div>}
            {decision && decision.enabled &&
                <AnimatedButton handleButonClick={handleButonClick} 
                textColor={decision.variables.text_color} 
                backColor={decision.variables.back_color} 
                scaleAmount={decision.variables.button_scale} />}
        </div>
     );
}
 
export default FsFeature;