type Ticket = {
  title: string;
  id: number;
};

export const Home = () => {
  const tickets: Ticket[] = [
    {
      title: `Install updates`,
      id: 1,
    },
    {
      title: `Restore the backup`,
      id: 2,
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      Hello World
    </div>
  );
};

export default Home;
