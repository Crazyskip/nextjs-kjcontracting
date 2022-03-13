export default function Videos() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="py-2 md:w-1/2 md:px-2">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="Close up grinder in action"
            src="https://www.youtube.com/embed/e2Si_5oocIw"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="py-2 md:w-1/2 md:px-2">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="grinder in action"
            src="https://www.youtube.com/embed/lg922sHv0Wk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
