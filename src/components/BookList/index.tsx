import React from 'react';

interface Book {
  title: string;
  author: string;
  url: string;
}

const books: Book[] = [
  {
    title: 'The Art of Thinking Clearly: Better Thinking, Better Decisions',
    author: 'Rolf Dobelli',
    url: 'https://www.hachette.co.uk/titles/rolf-dobelli/the-art-of-thinking-clearly/9781444759563/',
  },
  {
    title: 'Creating Meaningful Impact: The Essential Guide to Developing an Impact-Literate Mindset',
    author: 'Julie Bayley',
    url: 'https://www.emerald.com/books/monograph/14775/Creating-Meaningful-Impact-The-Essential-Guide-to',
  },
  {
    title: 'The Sea We Swim In: How Stories Work in a Data-Driven World',
    author: 'Frank Rose',
    url: 'https://wwnorton.com/books/9781324003137',
  },
  {
    title: 'Ways of Being: Animals, Plants, Machines — The Search for a Planetary Intelligence',
    author: 'James Bridle',
    url: 'https://www.penguin.co.uk/books/317823/ways-of-being-by-bridle-james/9780141994260',
  },
  {
    title: 'Unmasking Autism: Discovering the New Faces of Neurodiversity',
    author: 'Devon Price',
    url: 'https://www.penguinrandomhouse.com/books/688819/unmasking-autism-by-devon-price-phd/',
  },
  {
    title: 'Quiet: The Power of Introverts in a World That Can\'t Stop Talking',
    author: 'Susan Cain',
    url: 'https://www.penguin.co.uk/books/55983/quiet-by-cain-susan/9780141029191',
  },
  {
    title: 'The Powerful Purpose of Introverts: Why the World Needs You to Be You',
    author: 'Holley Gerth',
    url: 'https://www.revellbooks.com/Books/9780800722912',
  },
  {
    title: 'Against Technoableism: Rethinking Who Needs Improvement',
    author: 'Ashley Shew',
    url: 'https://wwnorton.com/books/9781324076254',
  },
  {
    title: 'Why I\'m No Longer Talking to White People About Race',
    author: 'Reni Eddo-Lodge',
    url: 'https://www.bloomsbury.com/uk/why-im-no-longer-talking-to-white-people-about-race-9781408870587/',
  },
  {
    title: 'Non-Binary Lives: An Anthology of Intersecting Identities',
    author: 'Edited by Jos Twist, Ben Vincent, Meg-John Barker & Kat Gupta',
    url: 'https://uk.jkp.com/products/nonbinary-lives',
  },
  {
    title: 'White Fragility: Why It\'s So Hard for White People to Talk About Racism',
    author: 'Robin DiAngelo',
    url: 'https://www.penguin.co.uk/books/313406/white-fragility-by-diangelo-robin/9780141990569',
  },
  {
    title: 'Brit(ish): On Race, Identity and Belonging',
    author: 'Afua Hirsch',
    url: 'https://www.penguin.co.uk/books/434457/british-by-afua-hirsch/9781784705039',
  },
  {
    title: 'Men Explain Things to Me',
    author: 'Rebecca Solnit',
    url: 'https://granta.com/products/men-explain-things-to-me/',
  },
  {
    title: 'No Turning Back: The History of Feminism and the Future of Women',
    author: 'Estelle B. Freedman',
    url: 'https://penguinrandomhousehighereducation.com/book/?isbn=9780345450531',
  },
  {
    title: 'The Authority Gap: Why Women Are Still Taken Less Seriously Than Men, and What We Can Do About It',
    author: 'Mary Ann Sieghart',
    url: 'https://www.penguin.co.uk/books/442736/the-authority-gap-by-mary-ann-sieghart/9781784165888',
  },
  {
    title: 'Everyday Sexism',
    author: 'Laura Bates',
    url: 'https://www.simonandschuster.co.uk/books/Everyday-Sexism/Laura-Bates/9781471149207',
  },
  {
    title: 'Data Feminism',
    author: "Catherine D'Ignazio & Lauren F. Klein",
    url: 'https://mitpress.mit.edu/9780262547185/data-feminism/',
  },
  {
    title: 'All About Love: New Visions',
    author: 'bell hooks',
    url: 'https://www.harpercollins.com/products/all-about-love-bell-hooks',
  },
  {
    title: 'Mismatch: How Inclusion Shapes Design',
    author: 'Kat Holmes',
    url: 'https://mitpress.mit.edu/9780262539487/mismatch/',
  },
  {
    title: 'Disability Visibility: First-Person Stories from the Twenty-First Century',
    author: 'Edited by Alice Wong',
    url: 'https://www.penguinrandomhouse.com/books/617802/disability-visibility-by-alice-wong/',
  },
  {
    title: 'Feminist, Queer, Crip: Essays',
    author: 'Alison Kafer',
    url: 'https://iupress.org/9780253009340/feminist-queer-crip/',
  },
  {
    title: 'Invisible Women: Exposing Data Bias in a World Designed for Men',
    author: 'Caroline Criado Perez',
    url: 'https://www.penguin.co.uk/books/435554/invisible-women-by-perez-caroline-criado/9781784706289',
  },
  {
    title: 'Race After Technology: Abolitionist Tools for the New Jim Code',
    author: 'Ruha Benjamin',
    url: 'https://www.politybooks.com/bookdetail?book_slug=race-after-technology-abolitionist-tools-for-the-new-jim-code--9781509526390',
  },
  {
    title: 'Black Software: The Internet and Racial Justice, from the AfroNet to Black Lives Matter',
    author: 'Charlton D. McIlwain',
    url: 'https://global.oup.com/academic/product/black-software-9780190863845',
  },
  {
    title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
    author: 'Safiya Umoja Noble',
    url: 'https://nyupress.org/9781479837243/algorithms-of-oppression/',
  },
  {
    title: 'Chavs: The Demonization of the Working Class',
    author: 'Owen Jones',
    url: 'https://www.versobooks.com/products/2199-chavs',
  },
];

export default function BookList(): React.JSX.Element {
  return (
    <section id="book-list" aria-labelledby="booklist-heading">
      <h2 id="booklist-heading">Book suggestions</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem 2rem' }}>
        {books.map(({ title, author, url }) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
              {title}<span className="sr-only"> (opens in new tab)</span>
            </a>
            <br />
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{author}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
