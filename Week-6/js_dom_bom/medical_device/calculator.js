const AV_N = document.getElementById("AV_N");
const AV_A = document.getElementById("AV_A");
const AV_L = document.getElementById("AV_L");
const AV_P = document.getElementById("AV_P");

const AC_L = document.getElementById("AC_L");
const AC_H = document.getElementById("AC_H");

const PR_N = document.getElementById("PR_N");
const PR_L = document.getElementById("PR_L");
const PR_H = document.getElementById("PR_H");

const UI_N = document.getElementById("UI_N");
const UI_R = document.getElementById("UI_R");

const scope_U = document.getElementById("scope_U");
const scope_C = document.getElementById("scope_C");

const conf_N = document.getElementById("conf_N");
const conf_L = document.getElementById("conf_L");
const conf_H = document.getElementById("conf_H");

const integ_N = document.getElementById("integ_N");
const integ_L = document.getElementById("integ_L");
const integ_H = document.getElementById("integ_H");

const health_N = document.getElementById("health_N");
const health_L = document.getElementById("health_L");
const health_H = document.getElementById("health_H");

const sens_N = document.getElementById("sens_N");
const sens_L = document.getElementById("sens_L");
const sens_H = document.getElementById("sens_H");

const warning = document.getElementById("warning");
const score = document.getElementById("score");

const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach((button) => {
  button.addEventListener("change", updateScore);
});

function updateScore() {
  if (checkForOneSelected()) {
    warning.style.display = "none";
    score.style.display = "block";
    calculateScore();
  } else {
    warning.style.display = "block";
    score.style.display = "none";
  }
}

function checkForOneSelected() {
  const selectedForAV =
    AV_A.checked || AV_N.checked || AV_L.checked || AV_P.checked;
  const selectedForAC = AC_H.checked || AC_L.checked;
  const selectedForPR = PR_H.checked || PR_L.checked || PR_N.checked;
  const selectedForUI = UI_N.checked || UI_R.checked;
  const selectedForScope = scope_C.checked || scope_U.checked;
  const selectedForConf = conf_N.checked || conf_L.checked || conf_H.checked;
  const selectedForInteg =
    integ_N.checked || integ_L.checked || integ_H.checked;
  const selectedForAvail =
    avail_N.checked || avail_L.checked || avail_H.checked;
  const selectedForHealth =
    health_N.checked || health_L.checked || health_H.checked;
  const selectedForSens = sens_N.checked || sens_L.checked || sens_H.checked;

  return (
    selectedForAC &&
    selectedForAV &&
    selectedForAvail &&
    selectedForConf &&
    selectedForHealth &&
    selectedForInteg &&
    selectedForPR &&
    selectedForScope &&
    selectedForSens &&
    selectedForUI
  );
}

function calculateScore() {
  const AVScore = getAVScore();
  const ACScore = getACScore();
  const PRScore = getPRScore();
  const UIScore = getUIScore();
  const scopeScore = getScopeScore();
  const baseConfig = getBaseConfig();
  const baseInteg = getBaseInteg();
  const baseAvail = getBaseAvail();

  const scoreExploitability = AVScore + ACScore + PRScore + UIScore;
  const scopeStatus = scopeScore;
  const scoreBase = baseConfig + baseInteg + baseAvail;

  const scoreFinal =
    scopeStatus * (3.32625829 * scoreBase + 1.1 * scoreExploitability);
  score.textContent = scoreFinal.toFixed(1);
}

function getAVScore() {
  if (AV_N.checked) return 0.85;
  if (AV_A.checked) return 0.62;
  if (AV_L.checked) return 0.55;
  else return 0.2;
}
function getACScore() {
  if (AC_H) return 0.44;
  if (AC_L) return 0.77;
}

function getPRScore() {
  if (PR_N) return 0.85;
  if (PR_L) return 0.62;
  else return 0.27;
}

function getUIScore() {
  if (UI_N) return 0.85;
  else return 0.62;
}
function getScopeScore() {
  if (scope_U) return 1.0;
  else return 1.08;
}
function getBaseConfig() {
  if (sens_N.checked && conf_N.checked) return 0;
  if (sens_N.checked && conf_L.checked) return 0.22;
  if (sens_N.checked && conf_H.checked) return 0.56;

  if (sens_L.checked && conf_N.checked) return 0;
  if (sens_L.checked && conf_L.checked) return 0.65;
  if (sens_L.checked && conf_H.checked) return 0.75;

  if (sens_H.checked && conf_N.checked) return 0;
  if (sens_H.checked && conf_L.checked) return 0.85;
  if (sens_H.checked && conf_H.checked) return 0.95;
}

function getBaseInteg() {
  if (health_N.checked && avail_N.checked) return 0;
  if (health_N.checked && avail_L.checked) return 0.22;
  if (health_N.checked && avail_H.checked) return 0.56;

  if (health_L.checked && avail_N.checked) return 0.55;
  if (health_L.checked && avail_L.checked) return 0.6;
  if (health_L.checked && avail_H.checked) return 0.75;

  if (health_H.checked && avail_N.checked) return 0.85;
  if (health_H.checked && avail_L.checked) return 0.9;
  if (health_H.checked && avail_H.checked) return 0.95;
}

function getBaseAvail() {
  if (health_N.checked && avail_N.checked) return 0;
  if (health_N.checked && avail_L.checked) return 0.22;
  if (health_N.checked && avail_H.checked) return 0.56;

  if (health_L.checked && avail_N.checked) return 0.55;
  if (health_L.checked && avail_L.checked) return 0.6;
  if (health_L.checked && avail_H.checked) return 0.65;

  if (health_H.checked && avail_N.checked) return 0.85;
  if (health_H.checked && avail_L.checked) return 0.9;
  if (health_H.checked && avail_H.checked) return 0.95;
}
