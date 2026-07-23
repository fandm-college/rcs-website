# F&M Research Computing Services Website

Astro site for the Franklin & Marshall College Research Computing Services portal.

# Updating Maintenance Banners and Operational Status

The RCS website displays maintenance notices and operational status information in two locations:

* The home page: `src/pages/index.astro`
* The status page: `src/pages/status.astro`

At present, the displayed values are maintained directly in these two Astro files. Changes must therefore be made in both files when the same announcement or status should appear consistently across the site.

## Updating the Maintenance Banner

The maintenance banner is used to announce planned outages, upgrades, or periods of reduced service.

### Home Page Banner

Open:

```text
src/pages/index.astro
```

Locate the maintenance banner section. Search for text from the current announcement, such as:

```text
Cluster maintenance
```

Update the banner heading and message as needed.

For example:

```astro
<section class="maintenance-banner">
  <strong>Scheduled Maintenance</strong>
  <p>
    Cluster maintenance is scheduled from August 10 through August 12.
    Jobs may be interrupted or temporarily unavailable during this period.
  </p>
</section>
```

The exact HTML structure may differ slightly depending on the current version of the page. Preserve the existing CSS classes unless the banner design also needs to be changed.

### Status Page Banner

Open:

```text
src/pages/status.astro
```

Locate the corresponding maintenance announcement and update its heading, dates, and description.

For example:

```astro
<section class="maintenance-banner">
  <strong>Scheduled Maintenance</strong>
  <p>
    Cluster maintenance is scheduled from August 10 through August 12.
    Jobs may be interrupted or temporarily unavailable during this period.
  </p>
</section>
```

Use the same wording on both pages unless there is a specific reason for the status page to provide additional detail.

## Removing a Maintenance Banner

After maintenance has been completed, either remove the maintenance-banner markup or comment it out.

Astro comments can be used when the banner may be needed again soon:

```astro
{/*
<section class="maintenance-banner">
  <strong>Scheduled Maintenance</strong>
  <p>Maintenance announcement text.</p>
</section>
*/}
```

Removing the section entirely is preferable when the announcement is no longer relevant.

Be sure to remove or disable the banner in both:

```text
src/pages/index.astro
src/pages/status.astro
```

## Updating Operational Status

Operational status indicates whether a cluster service is functioning normally, experiencing degraded performance, undergoing maintenance, or unavailable.

The detailed service statuses are managed directly in:

```text
src/pages/status.astro
```

The home page may also contain a summary status card in:

```text
src/pages/index.astro
```

### Recommended Status Values

Use consistent wording across the site:

| Status               | Meaning                                                              |
| -------------------- | -------------------------------------------------------------------- |
| Operational          | The service is functioning normally                                  |
| Degraded Performance | The service is available but performance or functionality is limited |
| Maintenance          | The service is undergoing planned maintenance                        |
| Down                 | The service is unavailable                                           |

### Updating the Status Page

Open:

```text
src/pages/status.astro
```

Locate the service status entries. A typical entry may resemble:

```astro
<div class="status-row">
  <span>Slurm Scheduler</span>
  <span class="status-operational">Operational</span>
</div>
```

To mark the service as down, change both the displayed text and the status class:

```astro
<div class="status-row">
  <span>Slurm Scheduler</span>
  <span class="status-down">Down</span>
</div>
```

Examples for other conditions include:

```astro
<span class="status-operational">Operational</span>
```

```astro
<span class="status-degraded">Degraded Performance</span>
```

```astro
<span class="status-maintenance">Maintenance</span>
```

```astro
<span class="status-down">Down</span>
```

The `.status-down` class is defined in `global.css` to display the status in red.

### Updating the Home Page Summary

Open:

```text
src/pages/index.astro
```

Locate the System Status card or status summary.

Update its displayed text and CSS class so that it reflects the overall condition shown on the status page.

For example:

```astro
<span class="status-operational">All Systems Operational</span>
```

When one or more important services are unavailable:

```astro
<span class="status-down">Service Interruption</span>
```

When maintenance is underway:

```astro
<span class="status-maintenance">Scheduled Maintenance</span>
```

The home page should provide a concise overall summary. The status page should contain the service-by-service details.

## Keeping Both Pages Consistent

Whenever a maintenance notice or overall status changes, review both files:

```text
src/pages/index.astro
src/pages/status.astro
```

Confirm that:

1. Maintenance dates match.
2. The maintenance descriptions do not conflict.
3. The home page summary reflects the detailed service statuses.
4. Status text matches the associated CSS class.
5. Expired announcements have been removed.

For example, avoid combinations such as:

```astro
<span class="status-operational">Down</span>
```

The text says that the service is down, but the operational class may style it as healthy.

The correct version would be:

```astro
<span class="status-down">Down</span>
```

## Testing the Changes

After editing the files, start the local Astro development server from the website project directory:

```bash
npm run dev
```

Open the local site address shown in the terminal, typically:

```text
http://localhost:4321
```

Review both pages:

```text
/
```

```text
/status
```

Verify the following:

* The maintenance banner appears at the expected width and location.
* The dates and message are correct.
* Status labels use the expected colors.
* The home page and status page contain consistent information.
* The layout works at both desktop and mobile widths.
* No old maintenance notice remains elsewhere on the page.

## Building the Site

Before deploying, run a production build:

```bash
npm run build
```

The build should finish without errors.

When available, preview the production build locally:

```bash
npm run preview
```

Review the home page and status page once more before publishing.

## Suggested Update Workflow

A typical maintenance update should follow this process:

1. Update the banner in `index.astro`.
2. Update the banner in `status.astro`.
3. Change affected service statuses in `status.astro`.
4. Update the overall status summary in `index.astro`.
5. Run the local development server.
6. Review `/` and `/status`.
7. Run the production build.
8. Commit and deploy the changes.

An example Git workflow is:

```bash
git status
git diff
git add src/pages/index.astro src/pages/status.astro
git commit -m "Update maintenance notice and system status"
git push
```

Include `global.css` in the commit when status styling was also modified:

```bash
git add src/styles/global.css
```

The actual stylesheet path may differ depending on the project structure.

## Future Improvement

Because the maintenance message and status summary currently appear in multiple files, there is a risk that the pages may become inconsistent.

A future improvement would be to move the shared values into one of the following:

* A shared Astro component
* A TypeScript or JavaScript data file
* A JSON or YAML configuration file

Both pages could then read from a single source of truth, reducing duplicate edits and the possibility of displaying conflicting information.
