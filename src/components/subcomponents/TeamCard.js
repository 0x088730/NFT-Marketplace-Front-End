import React from 'react'

const TeamCard = ({member_url, name, role}) => {
  return (
    <div className='team-card'>
      <img className='width-100' src='assets/images/team_bg.png' alt=''></img>
      <div className='team-member-block text-center'>
        <div className='member-name main-font'>{name}</div>
        <div className='member-role subtext-font'>{role}</div>
      </div>
      <hr className='member-hr'/>
      <div className='social-block text-center'>
        <a href='' className='social-link'>
          <img src='assets/images/facebook.svg' alt=''></img>
        </a>
        <a href='' className='social-link'>
          <img src='assets/images/twitter.svg' alt=''></img>
        </a>
        <a href='' className='social-link'>
          <img src='assets/images/telegram.svg' alt=''></img>
        </a>
      </div>
      <div className='team-content'>
        <img className='width-100 team-img' src={member_url} alt=''></img>
      </div>
    </div>
  )
}

export default TeamCard;