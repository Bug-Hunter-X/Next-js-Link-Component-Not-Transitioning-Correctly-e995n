```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/about" >
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default MyComponent;
// Ensure that the /pages/about.js file exists
// Verify that the routing configuration is correct
// Check for typos in the href property of the Link component
```