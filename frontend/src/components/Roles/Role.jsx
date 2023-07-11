import React, { useState, useEffect } from 'react';

export default function Role() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full-Stack Developer', 'Designer', 'Book Lover', 'Coding Enthusiast', 'Knowledge seeker', 'Visual artist'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
        <h2>{roles[currentRole]}</h2>
    </div>
  )
}
