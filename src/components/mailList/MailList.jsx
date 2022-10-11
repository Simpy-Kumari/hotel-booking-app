import './mailList.css';

const MailList = () => {
  return (
    <div className="mList">
      <h2 className='mTitle'>Save time, save money!</h2>
      <span className='mDesc'>Sign up and we'll send the best deals to you </span>
      <div className="mInput">
        <input type="email" placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>

  )
}

export default MailList