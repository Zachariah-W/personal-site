const AboutMe = () => {
  return (
    <div className="max-w-screen-md flex flex-row justify-center items-center gap-5 px-5">
      <div>
        <h1 className="font-bold text-2xl pb-3">My name is Zachariah Wang</h1>
        <p className="text-lg">
          I am a student majoring in Web Design and Engineering and minoring in
          Graphic Design at Santa Clara University. My passion lies in UI/UX
          design, where I enjoy crafting user experiences that are clean and
          simple to create a sense of approachability and elegance. Originally
          from Taiwan, I moved to the United States in 2022 to further my
          education and explore new creative opportunities, and I believe that
          my background and international experiences will allow me to bring a
          unique and thoughtful approach to my designs.
        </p>
      </div>
      <img
        src="../src/Photos/big-ban.jpg"
        alt="Photo of Zachariah Wang"
        className="w-6/12 rounded-lg "
      />
    </div>
  );
};

export default AboutMe;
