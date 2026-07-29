import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function getConstantArrayBody(script, name) {
  const match = script.match(new RegExp(`const ${name} = \\[(?<body>[\\s\\S]*?)\\n\\];`));
  assert.ok(match?.groups?.body, `${name} should be present`);
  return match.groups.body;
}

function getConstantObjectBody(script, name) {
  const match = script.match(new RegExp(`const ${name} = \\{(?<body>[\\s\\S]*?)\\n\\};`));
  assert.ok(match?.groups?.body, `${name} should be present`);
  return match.groups.body;
}

function getVideoRulePatterns(script, name) {
  return [...getConstantArrayBody(script, name).matchAll(/match:\s*\/(.+?)\/i/g)]
    .map(match => new RegExp(match[1], "i"));
}

test("ships the University of FlowState wrapper and metadata", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /src="\/flowstate\/index\.html"/i);
  assert.match(page, /title="University of FlowState"/i);
  assert.match(layout, /title: "University of FlowState"/i);
  assert.match(layout, /universityofflowstate\.com/i);
  assert.match(layout, /\/flowstate\/uoffs-link-preview\.png/i);
  assert.doesNotMatch(`${page}\n${layout}`, /codex-preview|Your site is taking shape|Codex is working/i);
});

test("ships personalized study paths and the guidance experience", async () => {
  const [html, script] = await Promise.all([
    readFile(new URL("../public/flowstate/index.html", import.meta.url), "utf8"),
    readFile(new URL("../public/flowstate/script.js", import.meta.url), "utf8"),
  ]);

  assert.match(html, /Aries Greyson/);
  assert.match(html, /Raini Smith/);
  assert.ok((html.match(/Knowledge is power\./g) || []).length >= 4);
  assert.match(html, /170\+ career pathways/);
  assert.match(html, /240\+ practical job plans/);
  assert.match(html, /Our mission/);
  assert.match(html, /How personalization works/);
  assert.match(html, /Institutional standing/);
  assert.match(html, /not represented as an accredited or degree-granting college/i);
  assert.match(script, /input\.name = "elective"/);
  assert.match(html, /Every elective is a standalone course/i);
  assert.match(html, /id="electiveSearch"/);
  assert.match(html, /id="clearElectives"/);
  assert.match(html, /id="electiveSelectedCount"/);
  assert.match(html, /class="mobile-account-toggle"/);
  assert.match(html, /aria-controls="introAccountActions"/);
  assert.match(html, /aria-controls="portalAccountActions"/);
  assert.match(html, /aria-label="Campus navigation"/);
  assert.match(html, /data-portal-view="dashboard"/);
  assert.match(html, /data-portal-view="courses"/);
  assert.match(html, /data-portal-view="guidance"/);
  assert.match(html, /data-portal-view-panel="dashboard"/);
  assert.match(html, /data-portal-view-panel="workforce"/);
  assert.match(html, /id="portalViewToolbar"/);
  assert.match(html, /id="mobilePortalNavigation"/);
  assert.match(html, /id="portalDashboardButton"/);
  assert.match(html, /Course Room/);
  assert.match(html, /Advisor &amp; Learning/);
  assert.match(script, /activePortalView: "dashboard"/);
  assert.match(script, /const portalViewDefinitions =/);
  assert.match(script, /const portalTargetViews =/);
  assert.match(script, /function showPortalView\(/);
  assert.match(script, /function openPortalTarget\(/);
  assert.match(script, /mobilePortalNavigation/);
  assert.match(script, /portal-view-hidden/);
  assert.match(script, /const electiveCatalog =/);
  assert.match(script, /const catalogCollator = new Intl\.Collator/);
  assert.match(script, /function replaceCatalogOptions\(select, options/);
  assert.match(script, /sortedOptions\.map\(createCatalogOption\)/);
  assert.match(script, /sortDatalistOptions\("careerExamples"\)/);
  assert.match(script, /sortDatalistOptions\("jobExamples"\)/);
  assert.match(script, /\[\.\.\.electiveCatalog\][\s\S]+compareCatalogLabels\(first\.category, second\.category\)/);
  assert.match(script, /\[\.\.\.electives\][\s\S]+\.sort\(compareCatalogLabels\)/);
  assert.match(script, /const mobileCatalogMedia = window\.matchMedia\("\(max-width: 720px\)"\)/);
  assert.match(script, /function syncElectiveCatalogDisclosure\(\)/);
  assert.match(script, /elective-category-collapsed/);
  assert.match(script, /document\.querySelectorAll\("\.mobile-account-toggle"\)/);
  assert.match(script, /Visual Arts and Design/);
  assert.match(script, /Technology and Digital Making/);
  assert.match(script, /Home, Food, and Everyday Life/);
  assert.match(script, /Trades and Practical Making/);
  assert.match(script, /Community, Education, and Civic Life/);
  assert.match(script, /Robert Greene Book Study: The 48 Laws of Power/);
  assert.match(script, /Robert Greene Book Study: The Art of Seduction/);
  assert.match(script, /Robert Greene Book Study: The 33 Strategies of War/);
  assert.match(script, /Robert Greene and 50 Cent Book Study: The 50th Law/);
  assert.match(script, /Robert Greene Book Study: Mastery/);
  assert.match(script, /Robert Greene Book Study: The Laws of Human Nature/);
  assert.match(script, /Robert Greene Book Study: The Daily Laws/);
  assert.match(script, /const robertGreeneBookStudies =/);
  assert.match(script, /Write a personal power code based on consent, transparency, accountability/);
  assert.match(script, /Compare attraction, persuasion, charm, and manipulation/);
  assert.match(script, /Create a fear inventory that separates real danger/);
  assert.match(script, /Design an apprenticeship season focused on fundamentals/);
  assert.match(script, /Track emotional triggers, bodily signals, interpretations/);
  assert.match(script, /function buildElectiveCourseTerm\(elective, careerTitle = ""\)/);
  assert.match(script, /This is an independent, original study guide/);
  assert.match(html, /Book-study electives use original summaries and reflective exercises/);
  const electiveCatalogBody = script.match(/const electiveCatalog = \[([\s\S]*?)\n\];\n\nconst robertGreeneBookStudies/)?.[1] || "";
  const electiveNames = [...electiveCatalogBody.matchAll(/^\s+"([^"]+)",?$/gm)].map(match => match[1]);
  assert.ok(electiveNames.length >= 200, `expected at least 200 electives, found ${electiveNames.length}`);
  assert.equal(new Set(electiveNames).size, electiveNames.length, "elective names should be unique");
  assert.match(html, /General language mastery/);
  assert.match(html, /Build your work-style profile/);
  assert.match(html, /id="pathIntroShell"/);
  assert.match(html, /<h1 id="pathIntroTitle">How would you like to begin\?<\/h1>/);
  assert.ok(
    html.indexOf('id="pathIntroShell"') < html.indexOf('id="portalApp"'),
    "the path builder should appear before the academic portal"
  );
  assert.match(html, /id="introCareerPath"[\s\S]+Career program/);
  assert.match(html, /id="introLanguagePath"[\s\S]+Language program/);
  assert.match(html, /id="introElectivePath"[\s\S]+Elective program/);
  assert.match(html, /id="introPassionPath"[\s\S]+Advisor passion path/);
  assert.match(html, /Begin with any one program, then use More inside your portal/i);
  assert.match(html, /No career or language is required/i);
  assert.match(html, /id="enrollmentBuilder"/);
  assert.match(html, /id="introJobPath"[\s\S]+Job training/);
  assert.match(html, /Use all learning styles and adapt as I go/);
  assert.match(script, /introLanguagePath[\s\S]+startEnrollment\("language"\)/);
  assert.match(script, /introElectivePath[\s\S]+startEnrollment\("electives"\)/);
  assert.match(script, /syncEnrollmentChoicesToPlan/);
  assert.match(html, /career directions, languages, and electives/i);
  assert.match(script, /Which languages, cultures, places, communities/);
  assert.match(script, /Which electives sound personally meaningful/);
  assert.match(script, /const passionStudyOptions =/);
  assert.match(script, /Language possibilities:/);
  assert.match(script, /Elective possibilities:/);
  assert.match(script, /passion-study-grid/);
  assert.doesNotMatch(html, /id="introExplore"/);
  assert.match(html, /id="accountDeleteModal"/);
  assert.match(html, /id="deleteAccountPassword"/);
  assert.match(html, /id="introDeleteAccount"/);
  assert.match(html, /id="deleteAccountButton"/);
  assert.match(html, /This action cannot be undone/);
  assert.match(html, /only one device can stay signed in at a time/);
  assert.match(html, /id="showAuthPassword"/);
  assert.match(html, /id="showDeleteAccountPassword"/);
  assert.match(html, /<span>Show password<\/span>/);
  assert.match(script, /connectPasswordVisibility\("showAuthPassword", "authPassword"\)/);
  assert.match(script, /connectPasswordVisibility\("showDeleteAccountPassword", "deleteAccountPassword"\)/);
  assert.match(script, /input\.type = visible \? "text" : "password"/);
  assert.match(script, /async function deleteCurrentAccount\(event\)/);
  assert.match(script, /fetch\("\/api\/auth\/account"/);
  assert.match(script, /localStorage\.removeItem\(savedPortalKey\)/);
  assert.match(script, /requestAccount\("\/api\/auth\/register"/);
  assert.match(script, /requestAccount\("\/api\/auth\/login"/);
  assert.match(script, /fetch\("\/api\/auth\/session"/);
  assert.match(script, /fetch\("\/api\/portal-state"/);
  assert.match(script, /async function initializeAccountSession\(\)/);
  assert.match(script, /portalState: getLegacyPortalState\(legacyEmail\)/);
  assert.match(html, /id="careerSaveStatus"/);
  assert.match(script, /state\.careerPathSavedAt = new Date\(\)\.toISOString\(\)/);
  assert.match(script, /async function switchToSelectedCareer\(\)/);
  assert.match(script, /if \(currentUser\) await flushRemoteState\(\)/);
  assert.match(script, /is saved to \$\{currentUser\.email\}/);
  assert.match(script, /lastPortalSection: "campus"/);
  assert.match(script, /portalSectionOffset: 0/);
  assert.match(script, /function capturePortalPosition\(\)/);
  assert.match(script, /function restoreSavedPortalPosition\(fallbackTarget = "campus"\)/);
  assert.match(script, /showPortal\("advisor", \{ preservePosition: true \}\)/);
  assert.match(script, /restorePosition: targetId === "campus"/);
  assert.match(script, /window\.setTimeout\(capturePortalPosition, 650\)/);
  assert.match(script, /legacyMigration: true/);
  assert.match(script, /migrated\.payload\.accountDeleted/);
  assert.match(script, /That older account was deleted/);
  assert.match(html, /id="introImportToFlowState"/);
  assert.match(html, /id="importToFlowStateButton"/);
  assert.match(html, /id="flowstateConnectModal"/);
  assert.match(html, /Connect and review in FlowState/);
  assert.match(script, /https:\/\/flowstate-4lr9\.onrender\.com\//);
  assert.match(script, /params\.set\("flowstateImport", "1"\)/);
  assert.match(script, /params\.set\("connectionId"/);
  assert.match(script, /params\.set\("studyTask"/);
  assert.match(script, /window\.open\(flowStateUrl\.toString\(\), "flowstate-university-import"\)/);
  assert.match(script, /flowstate-university-import-complete/);
  assert.match(script, /event\.origin !== flowStateWebOrigin/);
  assert.doesNotMatch(script, /params\.set\("password"/);
  assert.match(html, /Build and update your study plan/);
  assert.match(script, /function showPathIntro\(targetId = "campus"\)/);
  assert.match(script, /showPathIntro\(pendingTarget\)/);
  assert.match(script, /const pendingTarget = sessionStorage\.getItem\("flowstate-university-login-target"\) \|\| targetId/);
  assert.match(html, /id="workEnvironment"/);
  assert.match(html, /id="collaborationStyle"/);
  assert.match(html, /id="paceStyle"/);
  assert.match(html, /name="workValue"/);
  assert.match(script, /selectedElectives/);
  assert.match(script, /hasAcademicProgram/);
  assert.match(script, /Everyday fluency/);
  assert.match(script, /advisorInquiryLabels/);
  assert.match(script, /getWorkStyleProfile/);
  assert.match(script, /Work-style adaptation/);
  assert.match(script, /Your work-style rhythm/);
  assert.doesNotMatch(html, /Maya Chen|open and unlimited|service hours/i);
});

test("ships durable, protected student account storage", async () => {
  const [hosting, schema, accountStore, sharedAuth, registerRoute, loginRoute, portalStateRoute] = await Promise.all([
    readFile(new URL("../.openai/hosting.json", import.meta.url), "utf8"),
    readFile(new URL("../db/schema.ts", import.meta.url), "utf8"),
    readFile(new URL("../db/account-store.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/api/auth/_shared.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/api/auth/register/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/api/auth/login/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/api/portal-state/route.ts", import.meta.url), "utf8"),
  ]);

  assert.match(hosting, /"d1": "DB"/);
  assert.match(schema, /export const students = sqliteTable/);
  assert.match(schema, /export const studentSessions = sqliteTable/);
  assert.match(schema, /export const accountDeletionTombstones = sqliteTable/);
  assert.match(sharedAuth, /PBKDF2/);
  assert.match(sharedAuth, /HttpOnly/);
  assert.match(sharedAuth, /SameSite=Lax/);
  assert.match(accountStore, /DELETE FROM student_sessions WHERE student_id = \?/);
  assert.match(sharedAuth, /SESSION_DURATION_MS = 30 \* 24 \* 60 \* 60 \* 1000/);
  assert.match(registerRoute, /createAuthenticatedSession/);
  assert.match(registerRoute, /payload\?\.legacyMigration/);
  assert.match(registerRoute, /hasAccountDeletionTombstone/);
  assert.match(loginRoute, /MAX_FAILED_ATTEMPTS = 8/);
  assert.match(loginRoute, /verifyPassword/);
  assert.match(portalStateRoute, /updateStudentPortalState/);
  assert.match(portalStateRoute, /getAuthenticatedStudent/);
});

test("ships real playable and viewable multimedia lessons", async () => {
  const [html, script, audio, teamPhoto, classroomPhoto] = await Promise.all([
    readFile(new URL("../public/flowstate/index.html", import.meta.url), "utf8"),
    readFile(new URL("../public/flowstate/script.js", import.meta.url), "utf8"),
    readFile(new URL("../public/flowstate/media/reflection-practice.wav", import.meta.url)),
    readFile(new URL("../public/flowstate/media/team-collaboration.jpg", import.meta.url)),
    readFile(new URL("../public/flowstate/media/classroom-workshop.jpg", import.meta.url)),
  ]);

  assert.match(html, /Video, audio, photography, diagrams, and presentations/);
  assert.match(script, /<video class="lesson-video-player" controls/);
  assert.match(script, /<audio controls preload="metadata">/);
  assert.match(script, /real-photo-gallery/);
  assert.match(script, /interactive-skill-map/);
  assert.match(script, /timed-reel/);
  assert.match(script, /cdn\.careeronestop\.org\/OccVids\/OccupationVideos/);
  assert.match(script, /cdn\.careeronestop\.org\/CaptionFiles/);
  assert.match(script, /kind="captions" srclang="en" label="English" default/);
  assert.match(script, /tattoo\|fine art\|illustrat\|paint\|creative direction[\s\S]+27-1013\.00/);
  assert.match(script, /function getJobTrainingVideo/);
  assert.match(script, /English job video/);
  assert.match(script, /cashier\|checkout[\s\S]+Retail Salespersons/);
  assert.match(script, /Fast Food and Counter Workers/);
  assert.match(script, /Stockers and Order Fillers/);
  assert.match(script, /Hairdressers, Hairstylists, and Cosmetologists/);
  assert.doesNotMatch(script, /Lehren Wikipedia im Klassenzimmer/);

  const careerRules = [
    ...getVideoRulePatterns(script, "careerVideoRules"),
    ...getVideoRulePatterns(script, "jobTrainingVideoRules"),
  ];
  const baseCareers = [...getConstantObjectBody(script, "careerBlueprints")
    .matchAll(/title:\s*"(?<title>[^"]+)"\s*,\s*focus:\s*"(?<focus>[^"]+)"/g)]
    .map(match => `${match.groups.title} ${match.groups.focus}`);
  const expandedCareers = [...getConstantArrayBody(script, "expansiveCareerCatalog")
    .matchAll(/\["[^"]+",\s*"(?<title>[^"]+)",\s*"(?<focus>[^"]+)"/g)]
    .map(match => `${match.groups.title} ${match.groups.focus}`);
  const unmatchedCareers = [...baseCareers, ...expandedCareers]
    .filter(career => !careerRules.some(pattern => pattern.test(career)));
  assert.deepEqual(unmatchedCareers, [], `career videos missing for: ${unmatchedCareers.join(", ")}`);

  const jobRules = getVideoRulePatterns(script, "jobTrainingVideoRules");
  const baseJobs = [...getConstantObjectBody(script, "jobTrainingBlueprints")
    .matchAll(/title:\s*"(?<title>[^"]+)"/g)]
    .map(match => match.groups.title);
  const expandedJobs = [...getConstantArrayBody(script, "expansiveJobTrainingCatalog")
    .matchAll(/"([^"]+)"/g)]
    .map(match => match[1]);
  const unmatchedJobs = [...baseJobs, ...expandedJobs]
    .filter(job => !jobRules.some(pattern => pattern.test(job)));
  assert.deepEqual(unmatchedJobs, [], `job-training videos missing for: ${unmatchedJobs.join(", ")}`);

  assert.ok(audio.length > 10_000);
  assert.ok(teamPhoto.length > 50_000);
  assert.ok(classroomPhoto.length > 50_000);
});
