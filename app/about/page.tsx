export default function About() {
  return (
    <div className="w-full">
      <div className="shadow-xl border-[#121929] pb-2 flex flex-col lg:flex-row gap-4 items-center justify-center font-(family-name:--font-geist-sans)">
        <div className="lg:border-r-2 border-[#2c3853] px-4">
          <div className="animate-border rounded-full bg-radial  from-sky-400 to-indigo-900 bg-size-[400%_400%] p-0.5  transition [animation-duration:4s] dark:shadow-gray-700/25">
            <img className="h-36 w-36 rounded-full object-cover grayscale" src="/me-2.jpg" />
          </div>
        </div>
        <div className="px-2">
          <div>Hi, I'm Aziz!</div>
          <div>A Software Engineer based around London, UK</div>
          <p>I primarily work on web applications and games.</p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full xl:w-2/3 m-2 wrap-break-word whitespace-normal text-left">
          <p>
            I focus primarily on programming, at the moment mostly in Javascript (for Web) and using GDScript in the
            Godot Game Engine.
          </p>
          <p>I have a huge passion for retro games and RPGs, especially in the 16-bit era of games.</p>
          <p>
            My interest in game development began by wanting to learn what went behind games. Assited by indie titles
            inspired by games of that era fueled my passion for creating games.
          </p>
          <p>
            I've been learning pixel art, which you will see more in my upcoming projects, primarily using Aseprite.
          </p>
          <p>I play the piano, which allows me to work on some music in my projects.</p>
        </div>
      </div>
    </div>
  )
}
