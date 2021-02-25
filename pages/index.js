import Link from 'next/link';

const Index = () => (
    <div>
      <h1>Welcome</h1>
      <Link href="/survey">
        <a>Go to survey</a>
      </Link>
    </div>
);

export default Index;
