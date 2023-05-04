export const Donation = ({ DonationData }) => {
  const totalDonation = DonationData.reduce(
    (acc, { Donation }) => acc + Donation,
    0
  );
  return (
    <div>
      <h2>Total Donation</h2>
      <p>Total Donation Collected: _{totalDonation}_</p>
    </div>
  );
};
