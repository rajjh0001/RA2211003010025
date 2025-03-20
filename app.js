import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const dummyUsers = [
  { name: "Alice", posts: 120 },
  { name: "Bob", posts: 95 },
  { name: "Charlie", posts: 80 },
];

const dummyPosts = [
  { title: "Breaking News", likes: 500 },
  { title: "Tech Trends", likes: 420 },
  { title: "Health Tips", likes: 390 },
];

const dummyFeed = [
  { user: "Alice", content: "Loving the new updates!" },
  { user: "Bob", content: "AI is taking over!" },
  { user: "Charlie", content: "Amazing photography tips." },
];

function TopUsers() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top Users</h1>
      <Card>
        <CardContent>
          <ul>
            {dummyUsers.map((user, index) => (
              <li key={index} className="mb-2">{user.name}: {user.posts} posts</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

function TrendingPosts() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
      <Card>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dummyPosts}>
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="likes" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

function Feed() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Feed</h1>
      <Card>
        <CardContent>
          <ul>
            {dummyFeed.map((post, index) => (
              <li key={index} className="mb-2"><strong>{post.user}</strong>: {post.content}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default function SocialMediaAnalytics() {
  return (
    <Router>
      <div className="p-6">
        <nav className="mb-4">
          <Link to="/top-users" className="mr-4">Top Users</Link>
          <Link to="/trending-posts" className="mr-4">Trending Posts</Link>
          <Link to="/feed">Feed</Link>
        </nav>
        <Routes>
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/trending-posts" element={<TrendingPosts />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
}
