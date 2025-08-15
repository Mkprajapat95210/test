import React from 'react';
import SidebarSearch from './SidebarSearch';
import RecentNews from './RecentNews';
import Categories from './Categories';
import PopularTags from './PopularTags';

const BlogSidebar: React.FC = () => {
  return (
    <div className="common-sidebar-wrapper">
      <div className="common-sidebar p-0">
        <SidebarSearch />
      </div>
      <RecentNews />
      <Categories />
      <PopularTags />
    </div>
  );
};

export default BlogSidebar;