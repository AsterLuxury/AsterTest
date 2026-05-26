// Static, infinitely-scrolling ribbon. Pure CSS animation lives in globals.css
// (`.ribbon-track` keyframes), so this is a server component.
export function Marquee() {
  return (
    <div className="ribbon">
      <div className="ribbon-track">
        <span>Delivery Available Across Iraq</span>
        <span className="bullet">◆</span>
        <span>
          <em>Authentic</em> Quality Pieces
        </span>
        <span className="bullet">◆</span>
        <span>Order Direct on WhatsApp</span>
        <span className="bullet">◆</span>
        <span>Delivery Available Across Iraq</span>
        <span className="bullet">◆</span>
        <span>
          <em>Authentic</em> Quality Pieces
        </span>
        <span className="bullet">◆</span>
        <span>Order Direct on WhatsApp</span>
        <span className="bullet">◆</span>
      </div>
    </div>
  );
}
