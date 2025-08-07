// Fichier commun pour gérer la liste des chantiers
function getChantiers() {
  const chantiers = JSON.parse(localStorage.getItem("listeChantiers")) || [];
  return chantiers.sort();
}

function remplirMenuChantiers(selectElementId) {
  const select = document.getElementById(selectElementId);
  if (!select) return;

  const chantiers = getChantiers();
  select.innerHTML = '<option value="">Sélectionner un chantier</option>';

  chantiers.forEach(chantier => {
    const option = document.createElement("option");
    option.value = chantier;
    option.textContent = chantier;
    select.appendChild(option);
  });
}
