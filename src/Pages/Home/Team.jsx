import React, { useEffect, useState } from "react";
import { Baseurl } from "../../Config";

function Team() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(`${Baseurl}team`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to load team");

        // Filter category === "Team", active, then sort by order
        const teamOnly = (data.members || [])
          .filter((m) => m.category === "Team" && m.isActive)
          .sort((a, b) => a.order - b.order);

        setTeamMembers(teamOnly);
      } catch (err) {
        console.error("Error:", err.message);
      }
    };

    fetchTeam();
  }, []);

  return (
    <>
      <section class="meet-farmers-one">
        <div class="container">
          <div class="sec-title text-center">
            <div class="icon">
              <img src="assets/images/resources/sec-title-icon1.png" alt="" />
            </div>
            <span class="sec-title__tagline">professional people</span>
            <h2 class="sec-title__title">Meet the Team</h2>
          </div>
          <div class="row">
            {teamMembers.map((member, index) => (
              <div
                key={member._id}
                className={`col-xl-3 col-lg-6 wow fadeInUp`}
                data-wow-delay={`${(index % 4) * 100}ms`}
                data-wow-duration="1000ms"
              >
                <div className="meet-farmers-one__single">
                  <div className="meet-farmers-one__single-img">
                    <img src={member.imageUrl} alt={member.name} />
                  </div>
                  <div className="meet-farmers-one__single-title text-center">
                    <p>{member.designation}</p>
                    <h2>
                      <a href="#">{member.name}</a>
                    </h2>
                  </div>
                </div>
              </div>
            ))}

            {teamMembers.length === 0 && (
              <div className="text-center col-12 py-4 text-muted">
                No team members found.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
