import React from 'react';
import Header from './components/Header';
import BlogList from './BlogList';
import Footer from './components/Footer';
import blogData from './data/blogData';

function App() {
  const blogPosts = blogData.map((posts, i) => {
    return (
      <div>
        <div>key = {i}</div>
        <div>
          <div>
            <Post postInfo={posts} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;
