const command = `date +"%A %B %d | %I:%M | %p" |tr 'a-z' 'A-Z'`;

const refreshFrequency = 12000;

const className = `
  top: 30vh;
  right: 0;
  left: 0;
  width: 60vw;
  padding-top: 10px;
  box-sizing: border-box;
  text-align: center;
  margin: auto;
  font-family: Nunito;
  color: #F8F9FA;
  font-weight: 900;
  
  .date {
    font-weight: 700;
    font-size:75px;
    line-height: 75px;
  }

  .time {
    display: flex;
    justify-content: center;
    font-size: 225px;
    line-height: 225px;
  }

  .time-ampm{
    font-weight: 700;
    font-size: 55px;
    line-height: 55px;
  }

  .text-stroke {
    text-shadow:
      -1.25px -1.25px 0 #212529,
       0   -1.25px 0 #212529,
       1.25px -1.25px 0 #212529,
       1.25px  0   0 #212529,
       1.25px  1.25px 0 #212529,
       0    1.25px 0 #212529,
      -1.25px  1.25px 0 #212529,
      -1.25px  0   0 #212529;
  }
`
const render = ({ output }) => (
  <div>
    <div className="date text-stroke">{output.split('|')[0]} </div>
    <div className="time text-stroke">
      <div className="time text-stroke">{output.split('|')[1]} </div>
      <div className="time time-ampm">{output.split('|')[2]} </div>
    </div>
  </div>
);

export { command, refreshFrequency, render, className }