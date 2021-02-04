import { useState, useEffect } from "react"
import AppLayout from "components/AppLayout"
import Devitt from "components/Devitt"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, message }) => (
            <Devitt
              avatar={avatar}
              id={id}
              key={id}
              message={message}
              username={username}
            />
          ))}
        </section>
        <nav></nav>
      </AppLayout>

      <style jsx>{`
        header {
          background: #ffffffaa;
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          border-bottom: 1px solid #eee;
          height: 49px;
          position: sticky;
          top: 0;
          width: 100%;
        }

        h2 {
          font-weight: 800;
          font-size: 21px;
          padding-left: 15px;
        }

        nav {
          background: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          height: 49px;
          position: fixed;
          width: 100%;
        }
      `}</style>
    </>
  )
}
