import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import KButton from "./components/KButton";
import KSelect from "./components/KSelect";

import KRadio from "./components/KRadio";
import KCheckbox from "./components/KCheckbox";
import KSection from "./components/KSection";
import KSubsection from "./components/KSubsection";
import KColorSwatch from "./components/KColorSwatch";
import KTable from "./components/KTable";
import KIcon from "./components/KIcon";
import KLoader from "./components/KLoader";
import KTopMenu from "./components/KTopMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));
/*root.render(
  <div className="main">
    <h1>Web UI Components & Style Guide</h1>

    <KSection
      title="Top Nav Menus"
      content={
        <KTopMenu
          logo="./logo.svg"
          index="0"
          content={["link1", "link2", "link3"]}
        />
      }
    />

    <KSection title="Loaders" content={<KLoader />} />

    <KSection
      title="Colors"
      content={
        <div className="KContainer">
          <KSubsection
            title="Primary"
            content={
              <>
                <KColorSwatch
                  text="--inputAccentColor"
                  color="var(--inputAccentColor)"
                />
                <KColorSwatch
                  text="--inputBackgroundColor"
                  color="var(--inputBackgroundColor)"
                />
                <KColorSwatch
                  text="--lightTypeColor"
                  color="var(--lightTypeColor)"
                />
                <KColorSwatch
                  text="--darkTypeColor"
                  color="var(--darkTypeColor)"
                />
                <KColorSwatch
                  text="--BackgroundColor"
                  color="var(--BackgroundColor)"
                />
                <KColorSwatch
                  text="--containerBackgroundColor"
                  color="var(--containerBackgroundColor)"
                />
              </>
            }
          />
          <KSubsection
            title="Functional"
            content={
              <>
                <KColorSwatch
                  text="--functionalRed"
                  color="var(--functionalRed)"
                />
                <KColorSwatch
                  text="--functionalYellow"
                  color="var(--functionalYellow)"
                />
                <KColorSwatch
                  text="--functionalGreen"
                  color="var(--functionalGreen)"
                />
                <KColorSwatch
                  text="--functionalBlue"
                  color="var(--functionalBlue)"
                />
                <KColorSwatch
                  text="--BackgroundColor"
                  color="var(--BackgroundColor)"
                />
                <KColorSwatch
                  text="--containerBackgroundColor"
                  color="var(--containerBackgroundColor)"
                />
              </>
            }
          />
        </div>
      }
    />

    <KSection
      title="Type"
      content={
        <>
          <div>
            <h1>Banner Text</h1>
            <h2>Main Title</h2>
            <h3>Heading</h3>
            <h4>Subheading</h4>
            <p className="KCaption">Caption</p>
            <p>Paragraphs can have emphasized text</p>
          </div>
        </>
      }
    />

    <KSection
      title="Icons"
      content={
        <>
          <KIcon name="search" />
          <KIcon name="home" />
          <KIcon name="menu" />
          <KIcon name="settings" />
          <KIcon name="close" />
          <KIcon name="done" />
          <KIcon name="warning" />
          <KIcon name="question_mark" />
          <KIcon name="expand_more" />
          <KIcon name="chevron_right" />
          <KIcon name="favorite" />
          <KIcon name="add" />
          <KIcon name="delete" />
          <KIcon name="login" />
          <KIcon name="logout" />
          <KIcon name="arrow_back" />
          <KIcon name="arrow_forward" />
          <KIcon name="refresh" />
          <KIcon name="file_download" />
        </>
      }
    />

    <KSection
      title="Input Controls"
      content={
        <>
          {" "}
          <KSubsection
            title="Buttons"
            content={
              <KTable
                title="Table"
                headers={[
                  "Icon Only",
                  "Label Only",
                  "Icon and Label",
                  "Light Version",
                ]}
                rows={[
                  [
                    <KButton icon="search" />,
                    <KButton label="Label" />,
                    <KButton icon="search" label="Label" />,
                    <KButton icon="search" label="Label" light="true" />,
                  ],
                  [
                    <KButton color="--functionalGreen" icon="done" />,
                    <KButton color="--functionalGreen" label="Done" />,
                    <KButton
                      color="--functionalGreen"
                      icon="done"
                      label="Done"
                    />,
                    <KButton
                      color="--functionalGreen"
                      icon="done"
                      label="Done"
                      light="true"
                    />,
                  ],
                  [
                    <KButton color="--functionalYellow" icon="warning" />,
                    <KButton color="--functionalYellow" label="Warning" />,
                    <KButton
                      color="--functionalYellow"
                      icon="warning"
                      label="Warning"
                    />,
                    <KButton
                      color="--functionalYellow"
                      icon="warning"
                      label="Warning"
                      light="true"
                    />,
                  ],
                  [
                    <KButton color="--functionalRed" icon="close" />,
                    <KButton color="--functionalRed" label="Exit" />,
                    <KButton
                      color="--functionalRed"
                      icon="close"
                      label="Exit"
                    />,
                    <KButton
                      color="--functionalRed"
                      icon="close"
                      label="Exit"
                      light="true"
                    />,
                  ],
                  [
                    <KButton color="--functionalBlue" icon="question_mark" />,
                    <KButton color="--functionalBlue" label="Help" />,
                    <KButton
                      color="--functionalBlue"
                      icon="question_mark"
                      label="Help"
                    />,
                    <KButton
                      color="--functionalBlue"
                      icon="question_mark"
                      label="Help"
                      light="true"
                    />,
                  ],
                ]}
              />
            }
          />
          <KSubsection
            title="Radio Buttons"
            content={
              <>
                <KRadio
                  name="TestRadio"
                  options={["Option1", "Option2", "Option3"]}
                />
              </>
            }
          />
          <KSubsection
            title="Drop-Down Selectors"
            content={
              <>
                <KSelect
                  options={["Op 1", "Op 2", "Op 3", "LONG OPTION LONG OPTION"]}
                />
              </>
            }
          />
          <KSubsection
            title="Checkboxes"
            content={
              <>
                <KCheckbox
                  options={["Op 1", "Op 2", "Op 3", "LONG OPTION LONG OPTION"]}
                />
              </>
            }
          />
        </>
      }
    />
  </div>
);
*/

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
