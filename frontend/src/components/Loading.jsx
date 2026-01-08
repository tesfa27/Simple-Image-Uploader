
const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center font-inter text-small gap-4 py-8">
      <p><b>Uploading</b>, please wait..</p>
      <div className="relative h-2 w-[70%] bg-surface-secondary rounded-sm overflow-hidden">
        <div className="absolute h-full w-1/6 rounded-full bg-primary animate-loading"></div>
      </div>
    </div>
  );
};

export default Loading;