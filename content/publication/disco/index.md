---
title: "DISCO: Distributed and Scalable Oblivious Joins and Oblivious Primitives"

authors:
- admin
- Xian Wang
- Ioannis Demertzis
- Dimitrios Papadopoulos
- Minos Garofalakis

date: "2026-10-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2026-10-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "*ACM Symposium on Operating Systems Principles (SOSP)*, 2026"

abstract: The first scalable, distributed, and fully oblivious database system, combining hardware enclaves (TEEs) with cutting-edge oblivious primitives and novel optimizations that reduce inter-server communication, unlocking parallel oblivious computation at terabyte scale.

tags:
- Cryptography
- Confidential Computing
- Databases
- Hardware Enclaves
- Distributed Systems

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links: []
url_pdf: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
projects: []

# Slides (optional).
slides: ""
---

## Paper's Abstract

In recent years, Trusted Execution Environments (TEEs) have reshaped the landscape of secure cloud computing, enabling clients to outsource computation without trusting the cloud provider. Yet, TEEs face critical limitations, such as vulnerability to side-channel and leakage-abuse attacks. To address the security implications, recent advancements in the literature combine hardware enclaves with oblivious computation. This combination of hardware and software security offers strong security guarantees; however, existing oblivious computation approaches struggle to meet the performance and scalability demands of real-world deployments.

In this work, we present DISCO, the first *scalable, distributed, and fully oblivious* database system that seamlessly combines hardware enclaves with cutting-edge oblivious primitives and novel optimizations that significantly reduce inter-server communication overheads. What distinguishes DISCO from prior work is a suite of distributed frameworks that unlock *parallel computation* and *fundamentally shift the design paradigm* of distributed oblivious systems, enabling practical deployment at scales that were unattainable with previous solutions.

We provide a thorough evaluation of the performance of our system on both synthetic and real-world datasets. Our evaluation demonstrates that our design significantly reduces the gap between theory and practice, achieving 88× speedup over Jodes and 180× over SODA on non-foreign key joins with N=2²⁵ elements. Most importantly, we report, for the *first* time, results for computations at the *terabyte scale*.

## Citation

```bibtex
@inproceedings{mavrogiannakis2026disco,
  title={DISCO: Distributed and Scalable Oblivious Joins and Oblivious Primitives},
  author={Mavrogiannakis, Apostolos and Wang, Xian and Demertzis, Ioannis and Papadopoulos, Dimitrios and Garofalakis, Minos},
  booktitle={ACM Symposium on Operating Systems Principles (SOSP)},
  year={2026}
}
```
