import React, { Suspense } from 'react';
import Countries from './components/Countries/Countries';
import Footer from './components/Countries/Footer/Footer'

const countriesPromise= fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())


const App = () => {
  return (
    <div>
      <Suspense  fallback= {<h1>Country Data loading...</h1>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

      <Footer></Footer>
    </div>
  );
};

export default App;

































// import React, { useState, useEffect } from 'react';

// function App() {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://openapi.programming-hero.com/api/all')
//       .then(res => res.json())
//       .then(data => {
//         console.log('API Data:', data);
//         setCountries(data.countries || []);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Error:', err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <h2>Loading countries... 🌍</h2>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
//       <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>
//         🌍 Countries of the World
//       </h1>
//       <p style={{ textAlign: 'center', color: '#7f8c8d' }}>
//         Total: {countries.length} countries
//       </p>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
//           gap: '20px',
//           marginTop: '30px',
//         }}
//       >
//         {countries.map((country, index) => {
//           // ✅ Unique key - cca3 ব্যবহার করো
//           const uniqueKey = country.cca3?.cca3 || country.name?.common || index;

//           return (
//             <div
//               key={uniqueKey}
//               style={{
//                 border: '1px solid #e0e0e0',
//                 borderRadius: '12px',
//                 padding: '20px',
//                 backgroundColor: '#ffffff',
//                 boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//                 transition: 'transform 0.2s',
//               }}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.transform = 'translateY(-5px)')
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.transform = 'translateY(0)')
//               }
//             >
//               {/* Flag Image - double nested access */}
//               {country.flags?.flags?.png && (
//                 <img
//                   src={country.flags.flags.png}
//                   alt={country.name?.common || 'Country flag'}
//                   style={{
//                     width: '100%',
//                     height: '160px',
//                     objectFit: 'cover',
//                     borderRadius: '8px',
//                     marginBottom: '15px',
//                   }}
//                 />
//               )}

//               {/* Country Name - access from nested name object */}
//               <h2
//                 style={{
//                   fontSize: '1.5rem',
//                   margin: '10px 0',
//                   color: '#2c3e50',
//                 }}
//               >
//                 {country.name?.common || country.name?.official || 'Unknown'}
//               </h2>

//               {/* Capital - access from nested capital object */}
//               <p style={{ margin: '8px 0' }}>
//                 <strong>🏙️ Capital:</strong>{' '}
//                 {country.capital?.capital?.[0] || 'N/A'}
//               </p>

//               {/* Population - access from nested population object */}
//               <p style={{ margin: '8px 0' }}>
//                 <strong>👥 Population:</strong>{' '}
//                 {country.population?.population
//                   ? country.population.population.toLocaleString()
//                   : 'N/A'}
//               </p>

//               {/* Region - access from nested region object */}
//               <p style={{ margin: '8px 0' }}>
//                 <strong>🌎 Region:</strong>{' '}
//                 {country.region?.region || 'N/A'}
//               </p>

//               {/* Area - access from nested area object */}
//               {country.area?.area && (
//                 <p style={{ margin: '8px 0' }}>
//                   <strong>📐 Area:</strong>{' '}
//                   {country.area.area.toLocaleString()} km²
//                 </p>
//               )}

//               {/* Currency - double nested currencies object */}
//               {country.currencies?.currencies && (
//                 <p style={{ margin: '8px 0' }}>
//                   <strong>💵 Currency:</strong>{' '}
//                   {Object.values(country.currencies.currencies)[0]?.name ||
//                     'N/A'}
//                 </p>
//               )}

//               {/* Languages - double nested languages object */}
//               {country.languages?.languages && (
//                 <p style={{ margin: '8px 0' }}>
//                   <strong>🗣️ Languages:</strong>{' '}
//                   {Object.values(country.languages.languages)
//                     .slice(0, 3)
//                     .join(', ')}
//                   {Object.keys(country.languages.languages).length > 3 && '...'}
//                 </p>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;