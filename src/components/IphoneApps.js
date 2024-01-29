import React, { useState } from "react";
import "./IphoneApps.css";

function IphoneApps() {
  const [selectedArea, setSelectedArea] = useState(0);

  const handleButtonClick = (area) => {
    setSelectedArea(area);
  };

  return (
    <div className="iphone-container">
      <h2 className="app-description" onClick={() => handleButtonClick(0)}>
        Please Click On The App You Want To Learn More About!
      </h2>
      <div className="iphone-wrapper">
        <button
          className="invisible-button button-area-1"
          onClick={() => handleButtonClick(1)}
        />

        {/* Invisible button overlay for Area 2 */}
        <button
          className="invisible-button button-area-2"
          onClick={() => handleButtonClick(2)}
        />

        <img
          className="iphone-image"
          src="images/iPhoneApps.png"
          alt="iPhone"
        />

        <div className="app-info">
          {selectedArea === 0 && (
            <h1>My iOS Apps are made with Swift and SwiftUI</h1>
          )}
          {selectedArea === 1 && (
            <div>
              {/* Content for Area 1 */}
              <h1>Mount Doug Maps</h1> <br />
              <p>
                • Personal Finance app built with Swift <br />
                • Explored user and functional needs, resulting in a detailed
                software requirements document, and followed an incremental
                development process.
                <br />
                • Utilized Firebase API, for authentication, database, and Open
                AI API, for financial education, to satisfy the user
                requirements.
                <br />• Applied object-oriented programming in Swift and
                designed the UI with Swift UI, adopting a human-centered design
                process.
              </p>
              {/* Additional content for Area 1 */}
            </div>
          )}
          {selectedArea === 2 && (
            <div>
              {/* Content for Area 2 */}
              <p>
                • Created a Maps application for Mount Douglas Secondary that
                displays classroom locations. <br />
                • Self-taught Swift and XCode to develop the iOS app, improving
                upon the Android version developed in Java in 2022.
                <br />• Efficiently tested and debugged the application to
                ensure quality before deployment.
              </p>
              {/* Additional content for Area 2 */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IphoneApps;
