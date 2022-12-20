const collection = await pb.collections.create({
  name: 'posts',
  type: 'base',
  schema: [
      {
          name: 'title',
          type: 'text',
          required: true,
          options: {
              min: 10,
          },
      },
      {
          name: 'status',
          type: 'bool',
      },
  ],
});

"ID"
schema:[
  {name: 'Title', type: 'text'},
  {name: 'Published_Date', type: 'date'},
  {name: 'Cover_Image', type: 'text'},
  {name: 'Categories', type: 'text'},
  {name: 'Main_Category', type: 'text'},
  {name: 'Plain_Content', type: 'text'},
  {name: 'Rich_Content', type: 'text'},
  {name: 'Excerpt', type: 'text'},
  {name: 'Hashtags', type: 'text'},
  {name: 'View_Count', type: 'number'},
  {name: 'Like_Count', type: 'number'},
  {name: 'Comment_Count', type: 'number'},
  {name: 'Featured', type: 'bool'},
  {name: 'Pinned', type: 'bool'},
  {name: 'Last_Published_Date', type: 'date'},
  {name: 'Cover_Image_Displayed', type: 'bool'},
  {name: 'Post_Page_URL', type: 'url'},
  {name: 'Language', type: 'text'},
  {name: 'Translation_ID', type: 'text'},
  {name: 'Time_To_Read', type: 'number'},
  {name: 'Related_Posts', type: 'text'},
  {name: 'Tags', type: 'text'},
  {name: 'Author', type: 'text'},
  {name: 'Internal', type: 'text'},
  {name: 'Slug', type: 'text'},
  {name: 'PaidPlans', type: 'text'}
]