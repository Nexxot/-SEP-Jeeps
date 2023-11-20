import './css/node.css';
 
export default function NodeTimeLine({data}) {
  const title = data.title;
  return (
    <>
    <div>
      <div>
      <div className="timeline"
        style={{
          backgroundColor: data.color,
          height: '40px',
          width: `${data.width}px`,
          textAlign: 'left',
          fontSize: 25,
          color: 'white',
          border: '4px solid black',
          borderRadius: '8%'
        }}>
          {title}
        </div>
      </div>
    </div>
    </>
  );

}