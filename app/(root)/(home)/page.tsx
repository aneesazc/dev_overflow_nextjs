import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";
import React from "react";

const questions: any[] = [
  {
    _id: "1",
    title: "How to extend Hono's context for managing custom properties?",
    tags: [
      { _id: "1", name: "JavaScript" },
      { _id: "2", name: "Hono" },
      { _id: "3", name: "Cloudflare" },
    ],
    author: {
      _id: "1",
      name: "Jane Doe",
      picture: "https://example.com/jane.jpg",
      clerkId: "clerk123",
    },
    upvotes: ["user1", "user2"],
    views: 150000,
    answers: [],
    createdAt: new Date("2024-05-26T10:00:00Z"),
    clerkId: "clerk123",
  },
  {
    _id: "2",
    title: "Best practices for deploying a Next.js app with TurboRepo?",
    tags: [
      { _id: "4", name: "Next.js" },
      { _id: "5", name: "TurboRepo" },
      { _id: "6", name: "Deployment" },
    ],
    author: {
      _id: "2",
      name: "John Smith",
      picture: "https://example.com/john.jpg",
      clerkId: "clerk456",
    },
    upvotes: ["user3", "user4", "user5"],
    views: 200,
    answers: [{}],
    createdAt: new Date("2024-05-25T09:00:00Z"),
    clerkId: "clerk456",
  },
  {
    _id: "3",
    title: "How to implement search functionality in a Redux-managed state?",
    tags: [
      { _id: "1", name: "JavaScript" },
      { _id: "7", name: "Redux" },
      { _id: "8", name: "Search" },
    ],
    author: {
      _id: "3",
      name: "Alice Johnson",
      picture: "https://example.com/alice.jpg",
      clerkId: "clerk789",
    },
    upvotes: ["user6"],
    views: 120,
    answers: [{}],
    createdAt: new Date("2024-05-24T08:30:00Z"),
    clerkId: "clerk789",
  },
  {
    _id: "4",
    title: "How to handle bookmarks in a community app?",
    tags: [
      { _id: "4", name: "Next.js" },
      { _id: "9", name: "Bookmarks" },
      { _id: "7", name: "Redux" },
    ],
    author: {
      _id: "4",
      name: "Michael Brown",
      picture: "https://example.com/michael.jpg",
      clerkId: "clerk101",
    },
    upvotes: ["user7", "user8", "user9"],
    views: 180,
    answers: [{}],
    createdAt: new Date("2024-05-23T07:45:00Z"),
    clerkId: "clerk101",
  },
  {
    _id: "5",
    title: "How to design a game to teach programming skills in Go?",
    tags: [
      { _id: "10", name: "Go" },
      { _id: "11", name: "Game Development" },
      { _id: "12", name: "Education" },
    ],
    author: {
      _id: "5",
      name: "Emily Davis",
      picture: "https://example.com/emily.jpg",
      clerkId: "clerk112",
    },
    upvotes: ["user10", "user11"],
    views: 21000000,
    answers: [],
    createdAt: new Date("2024-05-22T06:15:00Z"),
    clerkId: "clerk112",
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
      <div className="mt-10">
        {/* <Pagination 
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        /> */}
      </div>
    </>
  );
};

export default Home;
