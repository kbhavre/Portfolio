import { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const USER_NAME = "kbhavre";
const GITHUB_TOKEN = "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";

const GithubMap = () => {
  const [data, setData] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [maxContribution, setMaxContribution] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const query = `
          query {
            user(login: "${USER_NAME}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `;

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub contributions.");
        }

        const result = await response.json();
        const contributionsData =
          result.data.user.contributionsCollection.contributionCalendar;

        const flatContributions = contributionsData.weeks.flatMap((week) =>
          week.contributionDays.map((day) => ({
            date: day.date,
            count: day.contributionCount,
          }))
        );

        setData(flatContributions);
        setTotalContributions(contributionsData.totalContributions);
        setMaxContribution(
          Math.max(...flatContributions.map((day) => day.count))
        );
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (isLoading) {
    return <div className="font-raleway text-2xl mx-auto ">Loading GitHub data...</div>;
  }

  if (error) {
    return <div className="font-raleway text-2xl mx-auto">Error: {error}</div>;
  }

  return (
        <div className=" w-full h-fit px-2 py-2 md:px-4 border border-myBlack flex flex-col items-start gap-2 md:gap-4 bg-secondary bg-opacity-40 font-raleway text-myBlack">
          <CalendarHeatmap
            
            startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
            endDate={new Date()}
            values={data}
            classForValue={(value) => {
              if (!value) {
                return "color-empty";
              }
              return `color-github-${Math.ceil(
                (value.count / maxContribution) * 5
              )}`;
            }}
          />
          <div className="text-xs md:text-sm">
            Total Contributions:{" "}
            <span className="font-semibold font-sans text-secondary">
              {totalContributions}
            </span>
          </div>
        </div>

  );
};

export default GithubMap;
