---
layout: ../../layouts/DocLayout.astro
title: "Data Management and Sharing Plans"
intro: "How F&M protects and shares research data, plus copy-ready language for the data management and sharing plan in your NIH or NSF proposal."
---

Almost every federal proposal now asks you to explain how you'll store, protect, and share the data your project creates. You don't have to write that from scratch. Research Computing Services (RCS) runs the storage, backup, and transfer systems most F&M projects use. This page explains how they work and gives you short, accurate language you can drop into your plan.

We'd also be happy to read your draft before you submit. [Email us](mailto:dorc@fandm.edu) and allow about a week.

## What changed in 2026

Both major funders replaced the old two-page narrative with structured forms:

- **NIH** — For applications due on or after **May 25, 2026**, the plan is a short form: a few yes/no commitments, a justification (300 words max) only if sharing will be limited, and a table of data types and repositories (100 words max). See [NOT-OD-26-046](https://grants.nih.gov/grants/guide/notice-files/NOT-OD-26-046.html). NIH is piloting this format and will evaluate it over the next year, so check the notice for current requirements before you submit.
- **NSF** — Since **April 27, 2026**, the Data Management and Sharing Plan (DMSP) is filled in through a webform on Research.gov instead of uploaded as a PDF. Some directorates add their own requirements, so check your program's page.

The practical upshot: long descriptions of campus infrastructure no longer belong in the plan itself. Use the short snippets below in the plan, and put the fuller description from this page in your **Facilities, Equipment & Other Resources** section.

## Before you start: Data we can't host

> **Do not store the data below on any RCS system without talking to us first.** That includes research storage, Conduit, Globus shares, Google Shared Drive, and the Open Storage Network. The PI is responsible for finding and arranging storage that meets the requirements for this data.
> 
> - Personally identifiable information (PII), such as names linked to Social Security numbers, financial account numbers, or other identifiers that could be used to identify someone
> - Identifiable human-subjects data or protected health information (HIPAA)
> - Controlled Unclassified Information (CUI) or export-controlled data
> - Data covered by a data use agreement with specific security terms

Once your plan is approved, it becomes a term of your award. If your plan says sensitive data will live on storage that doesn't meet the required controls, that's a compliance issue for you and for the College. 

**What to do instead.** [Email us](mailto:dorc@fandm.edu) before you write your plan, ideally before you collect any data. We can talk with you about your requirements and work with you to find a solution. 

## The research data lifecycle at F&M

### Retention

Research data is retained for a minimum of **six years**, which meets or exceeds common federal sponsor requirements.

### Protection

Research data always lives in at least two storage locations. When possible, depending on the size of the data set, we follow a **3-2-1-1** backup strategy: three copies, on at least two types of media, at least one copy off-site, and at least one copy immutable.

Here's how that works in practice:

- **Primary storage.** Research data is stored on our primary storage server, which uses the ZFS file system.
- **Daily snapshots.** We take a snapshot of every dataset at least once a day.
- **Nightly replication.** Snapshots are replicated nightly to a backup server, located in a separate data center on campus.
- **Additional copies.** Depending on size and type, data can also be copied automatically to a Google Shared Drive or to F&M's Open Storage Network (OSN) pod (currently under construction), both via Globus.

Why we built it this way:

- **Immutable recovery points.** Snapshots can't be altered after they're created, which protects data against ransomware and accidental or malicious deletion.
- **Fast recovery.** Snapshots are space-efficient and point-in-time, so earlier versions of your data can be restored quickly.
- **Site-level redundancy.** Nightly replication to a physically separate campus data center protects against hardware failure, outages, and local disasters, independent of any off-campus copies.
- **Integrity checks.** Data on both storage servers is checked twice a month for corruption.

### Access

Once stored, your data can be reached in several ways, depending on what you need to do:

| Need                                                    | Access path                                                                                                                                   |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Day-to-day work by your research team                   | Network shares (SMB and NFS) mounted on campus systems                                                                                        |
| High-speed transfer with external collaborators         | Globus, through the campus Data Transfer Node (DTN) or Globus Connect Personal                                                                |
| Sharing small data sets with students and collaborators | Google Shared Drive, which can also be done through the Globus Google Drive connector                                                         |
| Public sharing or national computing                    | Open Storage Network: anonymous public access to datasets, or use with NSF-funded resources such as ACCESS and the OSPool (Open Science Grid) |

Through Globus and the Open Storage Network, F&M's storage infrastructure supports the **FAIR** data principles (Findable, Accessible, Interoperable, Reusable), helping our researchers meet expectations for sharing and reuse by the broader research community.

## Storage is not the same as a repository

Our infrastructure keeps your data safe and makes it easy to move and share. But for the data underlying your publications, NIH and NSF expect a deposit in an **established repository** that assigns a persistent identifier (usually a DOI) and publishes descriptive metadata.

| Stage                                                              | Where it goes                                                                                  |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Collecting & analyzing                                             | RCS research storage, Conduit scratch, lab workstations                                        |
| Moving & collaborating                                             | Globus, Google Shared Drive                                                                    |
| Public access to data sets for sharing (especially large datasets) | Open Storage Network (OSN)                                                                     |
| Formal sharing for the funder                                      | A discipline repository, or a generalist one (Zenodo, Dryad, Figshare, OSF, Harvard Dataverse) |

If your field has a standard repository (GenBank, ICPSR, OpenNeuro, PDB, etc.), reviewers will expect you to use it. Not sure which one? Ask us before you submit.

**Long-term storage.** RCS stores research data for a minimum of six years. RCS does not assign DOIs. If your funder or journal requires a citable, persistent identifier for your data, deposit it in a repository that issues DOIs, such as Zenodo or Dryad. Large datasets can stay on F&M storage or OSN, with the repository record pointing to them. Note that a journal DOI identifies your paper, not your data.

**Public access through OSN.** Data shared publicly on F&M's Open Storage Network pod remains available for at least six years, consistent with our retention policy. If a location must change, RCS will notify the PI in advance. Because RCS does not assign DOIs, the citable, long-term copy of published data should be deposited in a repository that does.

## Copy-ready language

Each snippet is short on purpose. Edit the bracketed parts to match your project.

### Active storage and security

> During the project, data will be stored on Franklin & Marshall College's centrally managed research storage, operated by Research Computing Services on the ZFS file system in the College data center. Access is restricted to project personnel through College accounts. 

### Backup, retention, and preservation

> Research storage is protected by daily read-only ZFS snapshots, replicated nightly to a second storage system in a separate campus data center, with twice-monthly integrity checks on both systems. The College follows a 3-2-1-1 backup strategy where data size permits, and retains research data for a minimum of six years.

### Transfer and collaboration

> Data will be transferred between field sites, instruments, and collaborating institutions using Globus through F&M's dedicated data transfer node, providing secure, verified, high-speed transfer.

### Computing

> Analysis will be performed on Conduit, F&M's high-performance computing cluster (40 CPU nodes; GPU nodes with NVIDIA V100, A100, L40S, and H100 NVL; 300 TB of high-speed scratch; 100 Gb/s InfiniBand), managed by Research Computing Services. Researchers can also use additional RCS compute systems, or apply for NSF-funded shared infrastructure: ACCESS, OSPool, etc.

### Long-term sharing (the repository statement)

RCS can help you move data underlying your publications to your discipline-specific repository, which assigns persistent identifiers (DOIs) and retains data long term. In your plan, name the repository and note our help:

> Data underlying publications will be deposited in [discipline-specific repository], which assigns persistent identifiers (DOIs) and retains data for at least [N] years, with transfer assistance from Franklin & Marshall College Research Computing Services. Data will be made available by the time of publication or the end of the award, whichever comes first.

### NIH data-type table (Question 6) — example rows

| Expected Data Type | Established Repository or Example |
|---|---|
| [Mouse confocal microscopy images] | [BioImage Archive] |
| [Field survey measurements, tabular] | [Dryad] |
| [Analysis code] | [Zenodo, via GitHub release] |

### Budget justification

> Research storage, backup, data transfer, and HPC access are provided by Franklin & Marshall College Research Computing Services at no direct cost to the project. Repository deposit fees for [repository] are estimated at $[amount].

## Roles

The PI is responsible for following the approved plan and for depositing data with a repository. RCS is responsible for the availability, security, and backup of the College systems described above.

## How we can help

- Review your draft plan before submission
- Help you pick a repository and estimate storage needs
- Write a letter of support describing College resources
- Set up storage, Globus sharing, and Conduit access once you're funded
- Review required support infrastructure

[Contact Research Computing Services](mailto:dorc@fandm.edu)
