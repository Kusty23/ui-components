import React, { Component } from "react";

import KButton from "../components/KButton";
import KSelect from "../components/KSelect";
import KRadio from "../components/KRadio";
import KCheckbox from "../components/KCheckbox";
import KSection from "../components/KSection";
import KSubsection from "../components/KSubsection";
import KColorSwatch from "../components/KColorSwatch";
import KTable from "../components/KTable";
import KIcon from "../components/KIcon";
import KLoader from "../components/KLoader";
import KTopMenu from "../components/KTopMenu";
import KCodeBlock from "../components/KCodeBlock";
import KAccordion from "../components/KAccordion";

export default class DesignGuidelines extends Component {
  render() {
    return (
      <div className="main KGrid">
        <h1 className="span--12">Web UI Components & Style Guide</h1>

        <KAccordion title="Loaders" content={<KLoader />} />

        <KAccordion
          title="Colors"
          content={
            <>
              <KSubsection
                title="Primary"
                content={
                  <>
                    <KColorSwatch
                      text="--accentColor"
                      color="var(--accentColor)"
                    />
                    <KColorSwatch
                      text="--inputBackgroundColor"
                      color="var(--inputBackgroundColor)"
                    />
                    <KColorSwatch
                      text="--mainTypeColor"
                      color="var(--mainTypeColor)"
                    />
                    <KColorSwatch
                      text="--alternateTypeColor"
                      color="var(--alternateTypeColor)"
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
            </>
          }
        />

        <KAccordion
          title="Top Nav Menus"
          content={
            <>
              <KTopMenu index="0" content={["link1", "link2", "link3"]} />
              <KCodeBlock
                classStyle="span--12"
                content={
                  "<KTopMenu\n" +
                  '    index="0"\n' +
                  '    content={["link1", "link2", "link3"]}\n' +
                  "/>"
                }
              />
            </>
          }
        />

        <KAccordion
          title="Type"
          content={
            <>
              <h1 className="KHeroText span--12">Hero Text</h1>
              <h1 className="span--12">Heading 1</h1>
              <h2 className="span--12">Heading 2</h2>
              <h3 className="span--12">Heading 3</h3>
              <h4 className="span--12">Heading 4</h4>
              <p className="span--12">Paragraphs can have emphasized text</p>
              <p className="KCaption span--12">Caption</p>
              <p className="KTinyText span--12">Tiny Text</p>
            </>
          }
        />

        <KAccordion
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

        <KAccordion
          title="Input Controls"
          content={
            <>
              {" "}
              <KSubsection
                title="Buttons"
                content={
                  <KTable
                    classStyle="span--12"
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
                        <KButton
                          color="--functionalBlue"
                          icon="question_mark"
                        />,
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
                      options={[
                        "Op 1",
                        "Op 2",
                        "Op 3",
                        "LONG OPTION LONG OPTION",
                      ]}
                    />
                  </>
                }
              />
              <KSubsection
                title="Checkboxes"
                content={
                  <>
                    <KCheckbox
                      options={[
                        "Op 1",
                        "Op 2",
                        "Op 3",
                        "LONG OPTION LONG OPTION",
                      ]}
                    />
                  </>
                }
              />
            </>
          }
        />
      </div>
    );
  }
}
