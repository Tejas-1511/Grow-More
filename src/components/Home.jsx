import React from 'react';
import '../styles/home.scss';
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

export const Home = () => {
  return (
    <>
      <div className='home' id="home">
        <main>
          <h1>Hello</h1>
          <p>welcome to the page</p>
        </main>
      </div>

      <div className='home2'>
        <img src={vg} alt='graphics' />
        <div>
          <p>We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Picture this: You've carefully created an assignment for your class. The step-by-step instructions are crystal clear.
            During class time, you walk through all the directions, and the response is awesome. Your students are ready! It's
            finally time for them to start working individually and then... 8 hands shoot up with questions. You hear one student
            mumble in the distance, "Wait, I don't get this" followed by the dreaded, "What are we supposed to be doing again?"
            When I was a new computer science teacher, I would have this exact situation happen. As a result, I would end up
            scrambling to help each individual student with their problems until half the class period was eaten up. I assumed that
            in order for my students to learn best, I needed to be there to help answer questions immediately so they could move
            forward and complete the assignment.Here's what I wish I had known when I started teaching coding to elementary students
            - the process of grappling with an assignment's content can be more important than completing the assignment's product.
            That said, not every student knows how to grapple, or struggle, in order to get to the "aha!" moment and solve a problem
            independently. The good news is, the ability to creatively solve problems is not a fixed skill. It can be learned by
            students, nurtured by teachers, and practiced by everyone!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
