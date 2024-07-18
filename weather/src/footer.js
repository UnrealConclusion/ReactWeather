/**
 * Footer component
 * The current location is displayed here
 */
export default function Footer({location}) {
    return (
        <div className="footer">
            <h3><strong>Current Location:</strong> {location}</h3>
        </div>
    );
}