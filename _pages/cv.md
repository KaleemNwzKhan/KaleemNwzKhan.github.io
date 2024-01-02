---
layout: archive
title: "CV" 
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Download PDF: (<a href="https://www.rit.edu/"> https://www.rit.edu/ </a>)

Education
======
* B.S. in Computer Science, National University of Computer and Emerging Sciences, Pakistan, 2015
* M.S. in Computer Science, National University of Computer and Emerging Sciences, Pakistan, 2018
* Ph.D in Computing and Information Sciences, Rochester Institute of Technology (RIT), New York, USA 2027 (expected)

Work experience
======
* Graduate Research Assistant (Aug 2022 to Present)        
  * Mobile Systems Lab, RIT, New York, USA (<a href="https://www.rit.edu/"> https://www.rit.edu/ </a>)
  * Job Details 
    * Conduct research and development to enhance LiDAR-based autonomous driving perception with edge-assisted solutions.
    * Leverage ROS, FASTLIO, PCL, and Open3D technologies to efficiently process LiDAR data and develop a real-time system tailored for autonomous vehicles.
    * Author research articles and experimental reports for esteemed autonomous vehicle conferences such as Mobicom and MobiSys.

* Project Team Lead (Apr 2019 to Sep 2020)        
  * National Center of Artificial Intelligence, Peshawar, Pakistan (<a href="https://ncai.pk/)"> https://ncai.pk/ </a>)
  * Job Details 
    * Led a diverse team of researchers and developers in extensive research and development (R&D) endeavors, focused on creating innovative, domestically developed artificial intelligence (AI) solutions for the healthcare industry.
    * Utilizes deep learning techniques to assist practitioners and medical doctors in conducting cardiology and hematology investigations.
    * Co-authored and published three impactful research articles on machine learning-based solutions for diverse health complications and abnormalities.

Academic Projects
======
* <b> RAPID: Accurate, Real-time, Overlap-agnostic Road-side Vehicle Point Cloud Fusion	 (Aug 2022 to Aug 2023)</b>
  * Alignment of vehicle and RSU point clouds via 3D map for accuracy.
  * Innovative offline registration and alignment forecasting modules.
  * Fusion pipeline with caching for reduced latency, achieving 1-2 cm accuracy in 20 ms and up to 5-second faster reaction to external events in real-world tests.
* <b> Human fall detection and human postures classification using deep learning	(Apr 2019 to Aug 2020) </b> 
  * Computer vision system for fall detection using a monocular camera for independent living of older adults.
  * Utilizes mask R-CNN to detect human silhouettes from video data and CNN to classify postures and detect falls (lying posture on the ground).
  * Compared with other ML algorithms (SVM, RF, k-means, ANN) and demonstrated stable performance.
* <b> Deep learning based classification of unsegmented PCGs spectrograms leveraging transfer learning  (Sep 2020 to Mar 2021) </b> 
  * Use of short-time Fourier transform-based spectrograms to analyze normal and abnormal PCG signals.
  * Four studies conducted, including CNN model training and testing on different datasets, achieving high accuracy, sensitivity, specificity, precision, and F1 scores.
  * Notable results include 95.75% accuracy in the first study, 75.25% accuracy in the second study, 92.7% accuracy in the third study, and a 96.98% precision in the fourth study using transfer learning on noisy data.

Skills
======
* Languages
  * Python, C++, Java, SQL, HTML, PHP.
* Libraries
  * PCL, Open3D, OpenCV , Numpy, Pandas, Matplotlib,  Keras,  Tensorflow, Docker. 
* Tools
  * SLAM, FASTLIO, ROS, Cloud Compare, REST, Databases, Trello.
* Areas of Interest
  * 3D Modeling, 3D Sensing and Reconstruction, Autonomous Systems, Machine Learning.

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
