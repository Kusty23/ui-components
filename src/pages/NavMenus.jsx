import React, { Component } from "react";

import KSection from "../components/KSection";
import KSubsection from "../components/KSubsection";
import KTopMenu from "../components/KTopMenu";

export default class NavMenus extends Component {
  render() {
    return (
      <div className="main">
        <KSection
          title="Top Nav Menus"
          content={
            <>
              <KSubsection
                title="Basic"
                content={
                  <KTopMenu
                    index="0"
                    content={[
                      { text: "Link 1", href: "#Basic" },
                      { text: "Link 2", href: "#Basic" },
                      {
                        isGroup: true,
                        text: "Menu Group",
                        href: "#Basic",
                        content: [
                          {
                            text: "Sublink 1",
                            href: "#Basic",
                          },
                          {
                            text: "Sublink 2",
                            href: "#Basic",
                          },
                        ],
                      },
                    ]}
                  />
                }
              />
              <KSubsection
                title="Highlight"
                content={
                  <KTopMenu
                    style="highlight"
                    index="0"
                    content={[
                      { text: "Link 1", href: "#Highlight" },
                      { text: "Link 2", href: "#Highlight" },
                      {
                        isGroup: true,
                        text: "Menu Group",
                        href: "#Highlight",
                        content: [
                          {
                            text: "Sublink 1",
                            href: "#Highlight",
                          },
                          {
                            text: "Sublink 2",
                            href: "#Highlight",
                          },
                        ],
                      },
                    ]}
                  />
                }
              />
              <KSubsection
                title="Bubble"
                content={
                  <KTopMenu
                    style="bubble"
                    index="0"
                    content={[
                      { text: "Link 1", href: "#Bubble" },
                      { text: "Link 2", href: "#Bubble" },
                      {
                        isGroup: true,
                        text: "Menu Group",
                        href: "#Bubble",
                        content: [
                          {
                            text: "Sublink 1",
                            href: "#Bubble",
                          },
                          {
                            text: "Sublink 2",
                            href: "#Bubble",
                          },
                        ],
                      },
                    ]}
                  />
                }
              />
              <KSubsection
                title="Underline"
                content={
                  <KTopMenu
                    style="underline"
                    index="0"
                    content={[
                      { text: "Link 1", href: "#Underline" },
                      { text: "Link 2", href: "#Underline" },
                      {
                        isGroup: true,
                        text: "Menu Group",
                        href: "#Underline",
                        content: [
                          {
                            text: "Sublink 1",
                            href: "#Underline",
                          },
                          {
                            text: "Sublink 2",
                            href: "#Underline",
                          },
                        ],
                      },
                    ]}
                  />
                }
              />
            </>
          }
        />
      </div>
    );
  }
}
