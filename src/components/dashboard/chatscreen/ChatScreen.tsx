import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import Form from 'react-bootstrap/Form';
import UserLogo from "../../../../public/images/chatuser.png";


const ChatScreen = () => {
  return (
    <div className='sec-message-area'>
      <div className='container'>
        <div className='chat-container'>

          <div className="message bot">
            <Image src={UserLogo} alt='' />
            <div className="text-box">
              <div className="name">@RomanYar34</div>
              <div className="bubble">
                <p>Hii john! 👋</p>
                <span className="message-time">12:54 PM</span>
              </div>
              <div className="bubble">
                <p>Share your destination, starting point, and trip duration—we’ll create the perfect travel plan for you!"</p>
                <span className="message-time">12:54 PM</span>
              </div>
            </div>
          </div>

          {/* User Message */}
          <div className="message user">
            <div className="bubble">
              <p>Something about the booking</p>
              <span className="message-time">12:54 PM</span>
            </div>
          </div>
          <div className="message bot">
            <Image src={UserLogo} alt='' />
            <div className="text-box">
              <div className="name">@RomanYar34</div>
              <div className="bubble">
                <p>Hii john! 👋</p>
                <span className="message-time">12:54 PM</span>
              </div>
              <div className="bubble">
                <p>Share your destination, starting point, and trip duration—we’ll create the perfect travel plan for you!"</p>
                <span className="message-time">12:54 PM</span>
              </div>
            </div>
          </div>
          <div className="message bot">
            <Image src={UserLogo} alt='' />
            <div className="text-box">
              <div className="name">@RomanYar34</div>
              <div className="bubble">
                <p>Hii john! 👋</p>
                <span className="message-time">12:54 PM</span>
              </div>
              <div className="bubble">
                <p>Share your destination, starting point, and trip duration—we’ll create the perfect travel plan for you!"</p>
                <span className="message-time">12:54 PM</span>
              </div>
            </div>
          </div>
          {/* User Message */}
          <div className="message user">
            <div className="bubble">
              <p>Something about the booking</p>
              <span className="message-time">12:54 PM</span>
            </div>
          </div>

        </div>
        <div className='message-writing-box'>
           <Form.Control as="textarea" placeholder='Enter message here' rows={3} />
            <button className='send-button'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M18.0781 3.46456C18.0781 3.46456 18.0781 3.47237 18.0781 3.47628L13.5312 18.4716C13.4624 18.7151 13.3207 18.9318 13.1252 19.0926C12.9297 19.2533 12.6897 19.3504 12.4374 19.3708C12.4015 19.3739 12.3656 19.3755 12.3296 19.3755C12.0932 19.3762 11.8615 19.3093 11.6619 19.1827C11.4623 19.056 11.3031 18.8749 11.2031 18.6607L8.35931 12.8247C8.33086 12.7662 8.32136 12.7003 8.33214 12.6362C8.34293 12.572 8.37345 12.5129 8.41947 12.4669L12.9445 7.94191C13.0567 7.82374 13.1184 7.6664 13.1163 7.50342C13.1142 7.34045 13.0485 7.18473 12.9333 7.06948C12.818 6.95423 12.6623 6.88856 12.4994 6.88647C12.3364 6.88439 12.179 6.94605 12.0609 7.05831L7.53353 11.5833C7.48757 11.6293 7.42839 11.6599 7.36425 11.6706C7.30011 11.6814 7.2342 11.6719 7.17572 11.6435L1.33431 8.8005C1.10589 8.69091 0.916158 8.5145 0.790262 8.29465C0.664365 8.07479 0.608246 7.82187 0.629342 7.5694C0.650437 7.31693 0.747752 7.07683 0.908388 6.88092C1.06903 6.68501 1.2854 6.54253 1.52884 6.47237L16.5242 1.9255H16.5359C16.7494 1.86551 16.975 1.86341 17.1896 1.91941C17.4042 1.9754 17.6 2.08747 17.757 2.24413C17.9139 2.40078 18.0264 2.59638 18.0828 2.81085C18.1393 3.02532 18.1376 3.25094 18.0781 3.46456Z" fill="currentColor"/>
</svg>

            </button>
        </div>
      </div>
    </div>
  )
}

export default ChatScreen
