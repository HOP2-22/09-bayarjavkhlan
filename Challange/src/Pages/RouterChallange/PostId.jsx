import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TrashIcon } from "@heroicons/react/24/solid";
import NoWorkResult from "postcss/lib/no-work-result";

const Profile = {
  name: "Batgerel Bayrjavkhlan",
  profilePic:
    "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863",
};

const PostId = () => {
  const now = new Date();
  const [commentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState([]);
  const { Id } = useParams();

  const deleteItem = (index) => {
    let newList = comments.filter((item, filterIndex) => {
      return index !== filterIndex;
    });
    setComments(newList);
  };

  const instance = axios.create({
    baseURL: `https://dummyapi.io/data/v1/post/${Id}`,
    headers: { "app-id": "636e136b8af6961b47361447" },
  });

  const [data, setData] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await instance.get("/");
        setData(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchPost();
  }, [Id]);
  console.log(comments);
  const AddComment = () => {
    setComments([...comments, commentValue]);
    setCommentValue("");
  };
  const date = data?.publishDate.slice(0, 10);
  return (
    <div className="pt-68 flex flex-col items-center">
      <div className="flex flex-col gap-[23px] w-[700px]">
        <h1 className="text-[48px] font-extrabold leading-[80px] font-mukta">
          {data?.text}
        </h1>
        <div className="flex items-center gap-[15px] text-[#6D7D8B]">
          <img
            src={data?.owner.picture}
            className="font-semibold font-mulish w-14 h-14 rounded-full"
            alt=""
          />
          <div className="flex gap-[62px]">
            <div className="flex justify-between w-24">
              <p>{data?.owner.firstName}</p>
              <p>{data?.owner.lastName}</p>
            </div>
            <div className="">{date}</div>
          </div>
        </div>
      </div>
      <img src={data?.image} alt="" className="w-[900px] py-[61px]" />
      <div className="text-justify w-[700px] text-[#25313C] text-lg font-mulish font-medium pb-[56px]">
        If you’re thinking of starting a blog of your own, but just don’t have a
        clue on what to blog about, then fear not! <br />
        <br /> In this article, I have included a whole load of blog examples
        from a wide variety of different niches, all run on different blogging
        platforms like WordPress, Joomla! and Drupal.
        <br />
        <br /> Since the beginning of the internet, millions and millions and
        millions of blogs have been created. Many have died due to lost interest
        or their owners giving up on the idea, while others have thrived and
        continue to grow, making money and earning their owners a steady income.
        It’s a constant evolution of content that keeps people coming back for
        more, especially if these blogs contact highly resourceful material that
        people find useful and interesting.
        <br />
        <br /> Each example listed in this blog post are all different in some
        way and all bring something unique to their readers & subscribers. I
        want to show you what is possible and how you can take inspiration from
        them and create an awesome blog of your own.
        <br />
        <br /> Some of these blogs make over $100k a month, others are just a
        hobby for their owners, but all have the same purpose at their core… the
        love of writing and sharing information.
        <br />
        <br /> Some of these blogs make over $100k a month, others are just a
        hobby for their owners, but all have the same purpose at their core… the
        love of writing and Some of these blogs make over $100k a month, others
        are just a hobby for their owners, but all have the same purpose at
        their core… the love of writing and sharing information.Some of these
        blogs make over $100k a month, others are just a hobby for their owners,
        but all have the same purpose at their core… the love of writing and
        sharing information.
      </div>
      <div className="w-[700px] flex gap-[15px]">
        <img
          src={data?.owner.picture}
          alt=""
          className="w-14 h-14 rounded-full"
        />
        <div className=" flex flex-col pb-20">
          <p className="font-[mulish] text-[#1E2742]">Written By</p>
          <div className="flex font-light text-2xl text-[#25313C]">
            <p className="pr-3">{data?.owner.firstName}</p>
            <p>{data?.owner.lastName}</p>
          </div>
          <p className="text-[#989898] font-[mulish]">{data?.owner.title}</p>
        </div>
      </div>
      <div className="h-[2px] w-[700px] bg-gray-300 rounded-xl"></div>
      <p
        className={`${
          comments.length === 0 ? "hidden" : "block"
        } w-[700px] pt-5 text-4xl text-gray-600`}
      >
        Comments
      </p>
      <div className="py-10 divide-y">
        {comments.map((el, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-[700px] py-5"
          >
            <div className="flex gap-5">
              <img
                src={Profile?.profilePic}
                className="w-14 h-14 rounded-full"
                alt=""
              />
              <div>
                <div className="flex text-gray-600 text-sm divide-x divide-gray-400 gap-[10px]">
                  <div className="flex gap-2">
                    <p>{data?.owner.firstName}</p>
                    <p>{data?.owner.lastName}</p>
                  </div>
                  <div className="pl-[10px]">{Profile?.date}</div>
                </div>
                <div className="text-mukta">{el}</div>
              </div>
            </div>
            <div className="">
              <TrashIcon
                className="w-6 h-6 stroke-black fill-white stroke-2 cursor-pointer"
                onClick={() => deleteItem(index)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-[700px] flex flex-col gap-3 pt-[51px]">
        <p className="text-3xl text-[#6D7D8B]">Join the conversation</p>
        <div className="w-[700px] flex gap-[15px] pb-40">
          <img
            src={Profile?.profilePic}
            alt=""
            className="w-14 h-14 rounded-full"
          />
          <textarea
            type="text"
            className="w-full h-48 font-mulish text-md text-gray-600 p-4 border-2 border-[#BBC8D4] rounded-2xl focus:outline-none"
            placeholder="Comment"
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                e.preventDefault();
                AddComment();
              }
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PostId;
