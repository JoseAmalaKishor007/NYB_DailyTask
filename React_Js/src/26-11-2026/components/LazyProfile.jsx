
import React from "react";

function LazyProfile() {

  return (
    <div>

      <h2>Lazy Loaded Profile</h2>

      <p>Name: John</p>

      <p>Role: React Developer</p>

      <p>This component was loaded lazily.</p>

    </div>
  );
}

export default LazyProfile;
