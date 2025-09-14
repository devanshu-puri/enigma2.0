import React from 'react';
import './TeamPage.css';

// Structured data for all team members
const teamMembers = [
  { name: 'Bavitesh M', role: 'Head', img: 'bavitesh.jpg', link: 'https://www.linkedin.com/in/bavitesh-m-017007114' },
  { name: 'Divyarajsinh Matieda', role: 'Vice Head', img: 'divyaraj.jpg', link: 'https://www.linkedin.com/in/divyarajsinh-matieda-28babb242' },
  { name: 'Anushrava Bhat', role: 'General Secretary', img: 'anushrava.jpg', link: 'https://www.linkedin.com/in/anushrava-bhat-9aa98b268' },
  { name: 'C R Ananya', role: 'Joint General Secretary', img: 'ananya.jpg', link: 'https://www.linkedin.com/in/ananya-cr-0621b1260' },
  { name: 'Nayanika', role: 'Sponsorship & Finance Head', img: 'nayanika.jpg', link: '#' },
  { name: 'Hrudya MR', role: 'Joint Sponsorship & Finance Head', img: 'hrudya.jpg', link: 'https://www.linkedin.com/in/hrudya-m-r-269920257' },
  { name: 'Anindita', role: 'Strategy & Analysis Head', img: 'anindita.jpg', link: '#' },
  { name: 'Srinija Inguva', role: 'Joint Strategy & Analysis Head', img: 'srinija.jpg', link: 'https://www.linkedin.com/in/srinija-inguva-6b342b2a3' },
  { name: 'Shubham Mathad', role: 'Design Head', img: 'shubham.jpg', link: 'https://www.linkedin.com/in/shubham-mathad' },
  { name: 'Chandhana', role: 'Joint Design Head', img: 'chandhana.jpg', link: '#' },
  { name: 'Manasi S', role: 'Technical Head', img: 'manasi.jpg', link: 'https://www.linkedin.com/in/manasisridharan/' },
  { name: 'Sagar Patil', role: 'Joint Technical Head', img: 'sagar.jpg', link: 'https://www.linkedin.com/in/sagarplinkdn07' },
  { name: 'Sharanya P', role: 'Social Media & Content Creation Head', img: 'sharanya.jpg', link: 'https://www.linkedin.com/in/sharanya-p-755b0a270' },
  { name: 'Arindam Kalita', role: 'Joint Social Media & Content Creation Head', img: 'arindham.jpg', link: 'https://www.linkedin.com/in/arindam-kalita-4a6514250/' },
  { name: 'Jahanavi A', role: 'Marketing Head', img: 'jahnavi.jpg', link: 'http://www.linkedin.com/in/jahnavi-a-820764316' },
  { name: 'Aniketh Joshi', role: 'Joint Marketing Head', img: 'aniketh.jpg', link: 'https://www.linkedin.com/in/aniketh-joshi-1a2a12271' },
  { name: 'Sameer', role: 'Events Head', img: 'sameer.jpg', link: '#' },
  { name: 'Gayathri R Bhat', role: 'Joint Events Head', img: 'gayathri.jpg', link: 'https://www.linkedin.com/in/gayathri-r-bhat-a59705251' },
  { name: 'Ryan Cruz', role: "Institution's Innovation Council Head", img: 'ryan.jpg', link: 'https://www.linkedin.com/in/ryan-cruz-6348a52a3' },
  { name: 'Ishita Tandon', role: "Joint Institution's Innovation Council Head", img: 'ishita.jpg', link: 'https://www.linkedin.com/in/ishita-tandon-163868244' },
  { name: 'Sriraksha', role: "Joint Institution's Innovation Council Head", img: './assets/team/sriraksha.jpg', link: '#' },
];

const TeamPage = () => {
    return (
        <section className="team-page-section">
            <div className="team-container">
                <header className="team-header">
                    <h1 className="team-main-title">OUR TEAM - ACADEMIC YEAR 2024-2025</h1>
                </header>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div className="team-card" key={index}>
                            <img 
                                // --- THE ONLY CHANGE IS HERE ---
                                // I have removed the leading "/" from the src path.
                                src={`assets/team/${member.img}`} 
                                alt={`Portrait of ${member.name}`} 
                                className="team-card-img" 
                            />
                            <div className="team-card-overlay">
                                <h3 className="team-member-name">{member.name}</h3>
                                <p className="team-member-role">{member.role}</p>
                                {member.link !== '#' && (
                                    <a href={member.link} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamPage;