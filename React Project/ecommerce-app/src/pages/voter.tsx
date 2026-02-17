import { useState, useEffect } from "react";

interface Voter {
  id: number;
  name: string;
  age: number;
  city: string;
  has_voted: boolean;
}

function Voter() {
  const [voters, setvoters] = useState<Voter[]>([]);

  useEffect(() => {
    fetchallvoters();
  }, []);
  
  const fetchallvoters = async () => {
    try {
      const response = await fetch(`http://localhost:4000/voters`, {
        method: "GET",
      });

      const parsedresponse = await response.json();
      setvoters(parsedresponse);
    } catch (error) {
      console.error("Error fetching voters:", error);
    }
  };

  return (
    <>
      <h3>Voters</h3>
      <div className="d-flex flex-wrap">
        {voters.length === 0 ? (
          <p>No voters found.</p>
        ) : (
          voters.map((voter) => (
            <VoterCard key={voter.id} voter={voter} />
          ))
        )}
      </div>
    </>
  );
}

function VoterCard({ voter }: { voter: Voter }) {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{voter.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{voter.city}</h6>
        <p className="card-text">Age: {voter.age}</p>
        <p className="card-text">Voted: {voter.has_voted ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default Voter;
