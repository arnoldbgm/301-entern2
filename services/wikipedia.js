// Usando fetch nativo
export async function getArticleDescription(title) {
   try {
     const response = await fetch(
       `${process.env.WIKIPEDIA_API_URL}/page/summary/${encodeURIComponent(title)}`
     );
     const data = await response.json();
     return data.extract;
   } catch (error) {
     console.error('Error fetching from Wikipedia:', error);
     return null;
   }
 }