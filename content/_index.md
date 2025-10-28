---
title: ""
date: 2025-10-27
type: landing

design:
  spacing: "6rem"

sections:
  # Biography Section
  - block: resume-biography-3
    id: about
    content:
      username: admin
      text: ""
      button:
        text: Download CV
        url: uploads/cv.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
      spacing:
        padding: ['40px', '0', '100px', '0']

  # Research Overview
  - block: markdown
    content:
      title: 'Research Overview'
      subtitle: ''
      text: |-
        My research lies at the intersection of **cryptography**, **systems security**, and **privacy-preserving computation**. I focus on developing practical cryptographic protocols that enable secure computation over sensitive data while maintaining strong privacy guarantees.

        Current research areas include:
        - **Oblivious Database operators** for real-world applications

        - **Oblivious RAM (ORAM)** constructions and optimizations

        - **Applied cryptography** for distributed systems using Trusted Execution Environments.

        I'm always interested in collaborating on challenging problems that bridge theory and practice in security and privacy.
    design:
      columns: '1'
      spacing:
        padding: ['60px', '0', '60px', '0']

  # Featured Publications
  - block: collection
    id: publications
    content:
      title: Featured Publications
      text: ""
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: card
      columns: 2

  # All Publications
  - block: collection
    content:
      title: All Publications
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation

  # Talks & Presentations
  - block: markdown
    id: talks
    content:
      title: 'Talks & Presentations'
      subtitle: ''
      text: |-
        1. **"Scalable and Oblivious Databases Systems"**
           *Advancement to Candidacy*, UC Santa Cruz, September 2025

        2. **"OBLIVIATOR - Oblivious Parallel Joins and other Operators in Shared Memory Environments"**
           *USENIX Security*, August 2025

        3. **"Oblivious Parallel Joins and other operators"**
           *UC Santa Cruz Security Seminar*, February 2025
    design:
      columns: '1'
      spacing:
        padding: ['60px', '0', '60px', '0']

  # News & Updates
  - block: markdown
    id: news
    content:
      title: 'News & Updates'
      subtitle: ''
      text: |-
        **February 2025:** Our paper on oblivious databased got accepted in Usenix Security 2025!

        **September 2023:** Received a Research Grant from the Gerondelis Foundation.  
    design:
      columns: '1'
      spacing:
        padding: ['60px', '0', '60px', '0']

  # Contact
  - block: markdown
    id: contact
    content:
      title: 'Contact'
      subtitle: ''
      text: |-
        Feel free to reach out if you're interested in my research or potential collaborations.

        **Email:** amavrogiannakis [at] ucsc [dot] edu

        **Links:**
        - [GitHub](https://github.com/mavrogiannakisap)
        - [LinkedIn](https://www.linkedin.com/in/amavrogi)
        - [Google Scholar](https://scholar.google.com/citations?hl=en&user=oVYBhuoAAAAJ)
    design:
      columns: '2'
      spacing:
        padding: ['60px', '0', '60px', '0']
---
