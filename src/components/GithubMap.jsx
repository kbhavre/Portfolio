
import GitHubCalendar from "react-github-calendar";

export default function GithubMap() {
  const exampleTheme = {
    light: [
      'rgb(235, 235, 235)',
      'rgba(255, 101, 66, 0.44)',
      'rgba(255, 101, 66, 0.6)',
      'rgba(255, 101, 66, 0.75)',
      'rgba(255, 101, 66, 0.95)',
    ],
    dark: [
      'rgb(235, 235, 235)',
      'rgba(255, 101, 66, 0.44)',
      'rgba(255, 101, 66, 0.6)',
      'rgba(255, 101, 66, 0.75)',
      'rgba(255, 101, 66, 0.95)',
    ],
  };

  return (
    <div className=" w-full font-raleway text-myBlack font-normal flex justify-center ">
        <GitHubCalendar
          username="kbhavre"
          blockSize={15}
          blockMargin={5}
          fontSize={12} // Set font size to 8px
          theme={exampleTheme}
          style={{ 
            maxWidth: "100%",
            border: "1px solid #FF6542",
            padding: "8px",
            }}
        />
    </div>
  );
}