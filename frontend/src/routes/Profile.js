import React from "react";
import { Link } from 'react-router-dom';
import Expert from "./ExpertProfile";
import SkillHolder from "./SkillHolder";

const Profile = () =>{

    const profile = 'skillHolder'

      const renderComponent = () => {
        switch (profile) {
          case 'expert':
            return <Expert />;
          case 'skillHolder':
            return <SkillHolder />;
          default:
            return <div></div>;
        }
      };

    return (
        <>{renderComponent()}</>
    )
}

export default Profile